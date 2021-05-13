/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/voxpro-images/logo_vp.png';
import $ from 'jquery';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import { getCurrentUser } from 'helper';

export default function IR35TaxComponent() {
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      $('.app-content--inner').addClass('remove-p');
      $('.app-footer').css('display', 'none');
    }, 0);
    checkQuestions();
  });

  useEffect(() => {
    // componentWillUnmount
    return () => {
      setTimeout(() => {
        $('.app-content--inner').removeClass('remove-p');
        $('.app-footer').css('display', 'block');
      }, 0);
    };
  }, []);

  document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
      goQuestion();
    }
  });

  function checkQuestions() {
    api
      .get(`/api/v1/user_answers/check_questions?id=${currentUser.id}`)
      .then((response) => {
        if (response.data.success) {
          setShowQuestion(true);
        } else {
          setShowQuestion(false);
        }
      });
  }

  const goQuestion = () => {
    if (currentUser.role === 'agency') {
      history.push({
        pathname: '/ir35-verify',
        search: '?update=true',
        state: {
          update: true
        }
      });
    } else {
      history.push('/ir35-verify');
    }
  };

  return (
    <div className="ir35-background text-white">
      <div className="img-bg"></div>

      <div className="font-12 position-relative p-3">
        {/* when no ir-35 */}
        {showQuestion === false && (
          <div className="text-center w-100 mt-5">
            <img alt="..." className="ir35-logo" src={logo} />
            <h4 className="font-weight-bold mt-3 fhhh">
              CHECK EMPLOYMENT STATUS FOR TAX
            </h4>
            <p className="mb-2 fhh">
              You have no pending IR35 questionnaire to complete.
            </p>
          </div>
        )}
        {/* //Section 0 */}
        {showQuestion === true && (
          <div className="text-center w-100 mt-4">
            <img alt="..." className="ir35-logo" src={logo} />
            <h4 className="font-weight-bold mt-3 fhhh">
              CHECK EMPLOYMENT STATUS FOR TAX
            </h4>
            <p className="mb-2 fhh">Please answer all questions</p>
            <p className="mb-2 fh">Takes 7+ minutes</p>
            <Button
              size="large"
              variant="contained"
              onClick={() => {
                goQuestion();
              }}
              className="font-weight-bold btn-slack px-4 bg-color button-width">
              START
            </Button>
            <p className="fh">
              Press enter
              <FontAwesomeIcon icon={['fas', 'arrow-up']} className="angle" />
            </p>
            <div className="mt-10 font-weight-bold font-size-xs">
              <h6 className="font-weight-bold fhh">DISCLAIMER</h6>
              <p className="f">
                Voxpro assumes no responsibility for the results of the test.
                The result given is in accordance with HMRC tool which HMRC
                stands by.
              </p>
              <span className="font-italic fhh">Warning</span>
              <br></br>
              <span className="line-height-md f">
                This would not be the case if the information you have provided
                was checked and found to be inaccurate.
                <br></br>
                HMRC will also not stand by results achieved through contrived
                arrangements, designed to get a particular outcome from the
                service. This would be treated as evidence of deliberate
                non-compliance, which can attract higher associated penalties.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
