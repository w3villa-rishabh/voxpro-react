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
                                {i+1}
                              </span>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <span className="font-size-md font-weight-bold">
                                {ques.question}
                              </span>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <span className="font-size-lg pl-5">
                                {ques.candidateAnswer}
                              </span>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
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
        {/* <Card
          className={clsx('card-box', {
            'panel-open': accordion[1]
          })}>
          <Card>
            <div className="card-header">
              <div className="panel-title">
                <div className="accordion-toggle">
                  <Button
                    variant="text"
                    size="large"
                    className="btn-link d-flex align-items-center justify-content-between btn-transition-none"
                    onClick={() => toggleAccordion(1)}
                    aria-expanded={accordion[1]}>
                    <span className="font-weight-bold">Worker's duties</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-up']}
                      className="font-size-xl accordion-icon"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <Collapse in={accordion[1]}>
              <List component="div" className="list-group-flush">
                <ListItem className="py-2 d-block">
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={1}>
                      <span className="float-right font-weight-bold">1</span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-md font-weight-bold">
                        Will you be an ‘Office Holder?
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-lg pl-5">Yes</span>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="float-right"
                        title="Edit Question">
                        Edit
                      </a>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Collapse>
          </Card>
        </Card> */}
        {/* <Card
          className={clsx('card-box', {
            'panel-open': accordion[2]
          })}>
          <Card>
            <div className="card-header">
              <div className="panel-title">
                <div className="accordion-toggle">
                  <Button
                    variant="text"
                    size="large"
                    className="btn-link d-flex align-items-center justify-content-between btn-transition-none"
                    onClick={() => toggleAccordion(2)}
                    aria-expanded={accordion[2]}>
                    <span className="font-weight-bold">
                      Substitutes and helper
                    </span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-up']}
                      className="font-size-xl accordion-icon"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <Collapse in={accordion[2]}>
              <List component="div" className="list-group-flush">
                <ListItem className="py-2 d-block">
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={1}>
                      <span className="float-right font-weight-bold">1</span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-md font-weight-bold">
                        Have you ever sent a substitute to do this work?
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-lg pl-5">
                        Yes, your client accepted them
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="float-right"
                        title="Edit Question">
                        Edit
                      </a>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem className="py-2 d-block">
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={1}>
                      <span className="float-right font-weight-bold">2</span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-md font-weight-bold">
                        Would you have to pay your substitute?
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-lg pl-5">Yes</span>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="float-right"
                        title="Edit Question">
                        Edit
                      </a>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Collapse>
          </Card>
        </Card>
        <Card
          className={clsx('card-box', {
            'panel-open': accordion[3]
          })}>
          <Card>
            <div className="card-header">
              <div className="panel-title">
                <div className="accordion-toggle">
                  <Button
                    variant="text"
                    size="large"
                    className="btn-link d-flex align-items-center justify-content-between btn-transition-none"
                    onClick={() => toggleAccordion(3)}
                    aria-expanded={accordion[3]}>
                    <span className="font-weight-bold">
                      Working arrangements
                    </span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-up']}
                      className="font-size-xl accordion-icon"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <Collapse in={accordion[3]}>
              <List component="div" className="list-group-flush">
                <ListItem className="py-2 d-block">
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={1}>
                      <span className="float-right font-weight-bold">1</span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-md font-weight-bold">
                        Do you provide your services through a limited company.
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-lg pl-5">Yes</span>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="float-right"
                        title="Edit Question">
                        Edit
                      </a>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem className="py-2 d-block">
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={1}>
                      <span className="float-right font-weight-bold">2</span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-md font-weight-bold">
                        Have you already started working for this client?
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-lg pl-5">Yes</span>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="float-right"
                        title="Edit Question">
                        Edit
                      </a>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Collapse>
          </Card>
        </Card> */}
        {/* <Card
          className={clsx('card-box', {
            'panel-open': accordion[4]
          })}>
          <Card>
            <div className="card-header">
              <div className="panel-title">
                <div className="accordion-toggle">
                  <Button
                    variant="text"
                    size="large"
                    className="btn-link d-flex align-items-center justify-content-between btn-transition-none"
                    onClick={() => toggleAccordion(4)}
                    aria-expanded={accordion[4]}>
                    <span className="font-weight-bold">
                      Worker's financial risk
                    </span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-up']}
                      className="font-size-xl accordion-icon"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <Collapse in={accordion[4]}>
              <List component="div" className="list-group-flush">
                <ListItem className="py-2 d-block">
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={1}>
                      <span className="float-right font-weight-bold">1</span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-md font-weight-bold">
                        Will you be an ‘Office Holder?
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-lg pl-5">Yes</span>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="float-right"
                        title="Edit Question">
                        Edit
                      </a>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Collapse>
          </Card>
        </Card>
        <Card
          className={clsx('card-box', {
            'panel-open': accordion[5]
          })}>
          <Card>
            <div className="card-header">
              <div className="panel-title">
                <div className="accordion-toggle">
                  <Button
                    variant="text"
                    size="large"
                    className="btn-link d-flex align-items-center justify-content-between btn-transition-none"
                    onClick={() => toggleAccordion(5)}
                    aria-expanded={accordion[5]}>
                    <span className="font-weight-bold">
                      Worker's involvement
                    </span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-up']}
                      className="font-size-xl accordion-icon"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <Collapse in={accordion[5]}>
              <List component="div" className="list-group-flush">
                <ListItem className="py-2 d-block">
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={1}>
                      <span className="float-right font-weight-bold">1</span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-md font-weight-bold">
                        Will you be an ‘Office Holder?
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-lg pl-5">Yes</span>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="float-right"
                        title="Edit Question">
                        Edit
                      </a>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Collapse>
          </Card>
        </Card>
        <Card
          className={clsx('card-box', {
            'panel-open': accordion[6]
          })}>
          <Card>
            <div className="card-header">
              <div className="panel-title">
                <div className="accordion-toggle">
                  <Button
                    variant="text"
                    size="large"
                    className="btn-link d-flex align-items-center justify-content-between btn-transition-none"
                    onClick={() => toggleAccordion(6)}
                    aria-expanded={accordion[6]}>
                    <span className="font-weight-bold">Worker's contracts</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-up']}
                      className="font-size-xl accordion-icon"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <Collapse in={accordion[6]}>
              <List component="div" className="list-group-flush">
                <ListItem className="py-2 d-block">
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={1}>
                      <span className="float-right font-weight-bold">1</span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-md font-weight-bold">
                        Will you be an ‘Office Holder?
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <span className="font-size-lg pl-5">Yes</span>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="float-right"
                        title="Edit Question">
                        Edit
                      </a>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Collapse>
          </Card>
        </Card> */}
      </div>
    </>
  );
}
