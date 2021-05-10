/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Card,
  Button,
  Grid,
  List,
  ListItem,
  Collapse
} from '@material-ui/core';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import api from '../../api';
import { getCurrentUser } from '../../helper';
import { useHistory } from 'react-router-dom';

export default function AgencyTable() {
  const [answer, setAnswer] = useState([]);
  const [accordion, setAccordion] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const [currentUser] = useState(getCurrentUser());
  const history = useHistory();

  useEffect(() => {
    getAnswer();
  }, []);

  function getAnswer() {
    api.get(`/api/v1/ir_answers?id=${currentUser.id}`).then((response) => {
      if (response.data.success) {
        // alert('Something okay..');
        setAnswer(...answer, JSON.parse(response.data.ir_answers.answer_json));
        console.log(
          'reponse',
          JSON.parse(response.data.ir_answers.answer_json)
        );
        console.log('answer', answer);
        // setDocuments(response.data);
      } else {
        alert('Something went wrong..');
      }
    });
  }

  const toggleAccordion = (tab) => {
    const prevState = accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    setAccordion([...state]);
  };

  const editQuestion = (e, ques) => {
    e.preventDefault();
    console.log('editQuestion', ques);
    history.push({
      pathname: '/ir35-verify',
      search: '?update=true',
      state: {
        // location state
        update: true
      }
    });
  };

  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
        <div className="title pt-3">
          <b className="heading">Review IR35 Questionnaires</b>
        </div>
      </div>
      <div className="accordion mb-2">
        {answer.map((ans, index) => (
          <Card
            className={clsx('card-box', {
              'panel-open': accordion[index]
            })}>
            <Card>
              <div className="card-header">
                <div className="panel-title">
                  <div className="accordion-toggle">
                    <Button
                      variant="text"
                      size="large"
                      className="btn-link d-flex align-items-center justify-content-between btn-transition-none"
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={accordion[index]}>
                      <span className="font-weight-bold">{ans.heading}</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-up']}
                        className="font-size-xl accordion-icon"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <Collapse in={accordion[index]}>
                <List component="div" className="list-group-flush">
                  {ans.questions.map((ques, i) => (
                    <>
                      {ques !== null && (
                        <ListItem className="py-2 d-block" key={i}>
                          <Grid container spacing={0}>
                            <Grid item xs={12} sm={1}>
                              <span className="float-right font-weight-bold">
                                {i + 1}
                              </span>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <span className="font-size-md font-weight-bold">
                                {ques.question}
                              </span>
                            </Grid>
                            <Grid item xs={12} sm={4} className="pl-5">
                              <span className="font-size-lg">
                                {ques.candidateAnswer}
                              </span>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                              <a
                                href="#/"
                                onClick={(e) => editQuestion(e, ques)}
                                className="float-right"
                                title="Edit Question">
                                Edit
                              </a>
                            </Grid>
                          </Grid>
                        </ListItem>
                      )}
                    </>
                  ))}
                </List>
              </Collapse>
            </Card>
          </Card>
        ))}
      </div>
    </>
  );
}
