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
import _ from 'lodash';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import api from '../../api';
import { getCurrentUser } from '../../helper';
import { useHistory } from 'react-router-dom';
import {
  getIr35QuestionsSuccess,
  onIr35Questions,
  setNextQuestion
} from '../../reducers/ThemeOptions';

const AgencyTable = (props) => {
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
    if (
      (history.action === 'PUSH' || history.action === 'POP') &&
      !props.answer.length
    ) {
      getAnswer();
    }
  }, []);

  function getAnswer() {
    api.get(`/api/v1/ir_answers?id=${currentUser.id}`).then((response) => {
      if (response.data.success && !!response.data.ir_answers) {
        const data = JSON.parse(response.data.ir_answers.answer_json);
        console.log('data', data);
        let updateArray = groupBy(data);
        props.onIr35Questions(data);
        props.onLoadIr35QuestionsComplete(updateArray);
      }
    });
  }

  // Accepts the array and key
  const groupBy = (array) => {
    // Return the end result
    return (
      _.chain(array)
        .filter((a) => a.options.length !== 0)
        // Group the elements of Array based on `heading` property
        .groupBy('heading')
        // `key` is group's name (heading), `value` is the array of objects
        .map((value, key) => ({ heading: key, questions: value }))
        .value()
    );
  };

  const toggleAccordion = (tab) => {
    const prevState = accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    setAccordion([...state]);
  };

  const editQuestion = (e, ques) => {
    e.preventDefault();
    console.log('editQuestion', ques);
    let updateQuestion = props.questions;
    updateQuestion[ques.index - 1].options = ques.options;
    let findObj = ques.options.find((a) => a.candidateSelect === true);
    props.setNextQuestion(findObj.next);
    history.push({
      pathname: '/ir35-verify',
      search: '?update=true',
      state: {
        update: true
      }
    });
    localStorage.setItem('editQuestion', JSON.stringify(ques));
  };

  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
        <div className="title pt-3">
          <b className="heading">Review IR35 Questionnaires</b>
        </div>
      </div>
      {props.answer && (
        <div className="accordion mb-2">
          {props.answer.map((ans, index) => (
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
                        {ques !== null && ques.candidateSelect && (
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
                                <div className="d-flex">
                                  <div>
                                    {ques.options.map((op) => (
                                      <>
                                        {op.candidateSelect && (
                                          <div>
                                            <span className="font-size-lg">
                                              {op.name}
                                            </span>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                  <div>
                                    {ques.options.map((op) => (
                                      <>
                                        {op.agencySelect && (
                                          <div className="pl-5">
                                            <span className="font-size-lg left-border">
                                              {op.name}
                                            </span>
                                          </div>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                </div>
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
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  answer: state.ThemeOptions.ir35answers,
  questions: state.ThemeOptions.irQuestions
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadIr35QuestionsComplete: (question) => {
      dispatch(getIr35QuestionsSuccess(question));
    },
    onIr35Questions: (question) => {
      dispatch(onIr35Questions(question));
    },
    setNextQuestion: (next) => {
      dispatch(setNextQuestion(next));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgencyTable);
