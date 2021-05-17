import React, { useState } from 'react';

import { Card, Button, Grid, CardContent } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

import AddsComponents from 'components/add_component';
import { getCurrentUser } from '../../helper';

export default function OnBoardDocument() {
  const history = useHistory();
  // const [documents, setDocuments] = useState([]);
  const [currentUser] = useState(getCurrentUser());

  // useEffect(() => {
  //   // getDocuments();
  // }, [getDocuments]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // function getDocuments() {
  //   api
  //     .get(`/api/user/show_user_documents?id=${currentUser.id}`)
  //     .then((response) => {
  //       if (response.data) {
  //         setDocuments(response.data);
  //       } else {
  //         alert('Something went wrong..');
  //       }
  //     });
  // }

  const viewDocument = (e) => {
    e.preventDefault();
    history.push('/view-document');
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={9} xs={12}>
          <div className="page-title">
            <PostAddIcon />
            <div className="title">
              {currentUser.role !== 'candidate' && (
                <h5 className="heading mt-3">Document Management</h5>
              )}

              {currentUser.role === 'candidate' && (
                <>
                  <h5 className="heading">Document Management</h5>
                  <p>
                    Upload, Store, Update and Manage your information and
                    document requests.
                  </p>
                </>
              )}
            </div>
          </div>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Button className="btn-neutral-info hover-scale-sm px-4 float-right">
            <span className="px-2">Select Doc Type</span>
          </Button>
        </Grid>
      </Grid>

      {/* <ul className="show-doc mb-1">
          {documents.map((file) => (
            <li className="p-2 w-25">
              <Card className="card-box">
                <img height="100%" width="100%" alt="..." src={stock1} />
                <div className="p-2">{file.doc_name}</div>
              </Card>
            </li>
          ))}
        </ul> */}
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Card className="card-box h-100">
            <div className="m-2 text-capitalize font-size-lg text-center">
              {currentUser.role === 'candidate' && <b>Personal Documents</b>}
              {(currentUser.role === 'agency' ||
                currentUser.role === 'company') && <b>Candidates Documents</b>}
            </div>
            <div className="card-content-overlay text-center py-4">
              <div className="d-70 rounded-circle bg-info text-white btn-icon mx-auto text-center">
                <FontAwesomeIcon
                  icon={['fas', 'id-card-alt']}
                  className="display-4"
                />
              </div>
              <div className="mb-1 mt-2 text-black text-black-50">
                4 Documents {currentUser.role === 'candidate' && 'Uploaded'}
                {currentUser.role === 'agency' && 'added'}
                {currentUser.role === 'company' && 'added'}
                {(currentUser.role === 'agency' ||
                  currentUser.role === 'company') && (
                  <div>
                    <div>3 Documents downloaded</div>
                    <div>2 Documents Pending Viewing</div>
                  </div>
                )}
              </div>
              {/* <div className="font-size-lg opacity-8">Today's Sales</div> */}
              <div className="divider mx-4 my-2" />
              <div className="text-center mb-2">
                <a href="/#" onClick={(e) => viewDocument(e)}>
                  <Button size="small" className="px-4 btn-neutral-info">
                    View Documents
                  </Button>
                </a>
              </div>
              {currentUser.role === 'candidate' && (
                <div className="text-center">
                  <Button size="small" className="px-4 btn-neutral-info">
                    Upload Documents
                  </Button>
                </div>
              )}
              {(currentUser.role === 'agency' ||
                currentUser.role === 'company') && (
                <div className="text-center">
                  <Button size="small" className="px-4 btn-neutral-info">
                    Pending Documents
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className="card-box h-100">
            <div className="m-2 text-capitalize font-size-lg text-center">
              {currentUser.role === 'candidate' && (
                <b>Limited Company Documents</b>
              )}
              {(currentUser.role === 'agency' ||
                currentUser.role === 'company') && <b>Placements Documents</b>}
            </div>
            <div className="card-content-overlay text-center py-4">
              <div className="d-70 rounded-circle bg-info text-white btn-icon mx-auto text-center">
                <FontAwesomeIcon
                  icon={['fas', 'file-word']}
                  className="display-4"
                />
              </div>
              <div className="mb-1 mt-2 text-black text-black-50">
                3 Documents {currentUser.role === 'candidate' && 'Uploaded'}
                {currentUser.role === 'agency' && 'added'}
                {currentUser.role === 'company' && 'added'}
                {(currentUser.role === 'agency' ||
                  currentUser.role === 'company') && (
                  <div>
                    <div>2 Documents downloaded</div>
                    <div>2 Documents Pending Viewing</div>
                  </div>
                )}
              </div>
              {/* <div className="font-size-lg opacity-8">Monthly Income</div> */}
              <div className="divider mx-4 my-2" />
              <div className="text-center">
                <Button size="small" className="px-4 btn-neutral-info mb-2">
                  View Documents
                </Button>
              </div>
              {currentUser.role === 'candidate' && (
                <div className="text-center">
                  <Button size="small" className="px-4 btn-neutral-info">
                    Upload Documents
                  </Button>
                </div>
              )}
              {(currentUser.role === 'agency' ||
                currentUser.role === 'company') && (
                <div className="text-center">
                  <Button size="small" className="px-4 btn-neutral-info">
                    Pending Documents
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className="card-box h-100">
            <div className="m-2 text-capitalize font-size-lg text-center">
              {currentUser.role === 'candidate' && <b>General Documents</b>}
              {currentUser.role === 'agency' && <b>Client Documents</b>}
              {currentUser.role === 'company' && <b>Agency Documents</b>}
            </div>
            <div className="card-content-overlay text-center py-4">
              <div className="d-70 rounded-circle bg-info text-white btn-icon mx-auto text-center">
                <FontAwesomeIcon icon={['fas', 'file']} className="display-4" />
              </div>
              <div className="mb-1 mt-2 text-black text-black-50">
                2 Documents {currentUser.role === 'candidate' && 'Uploaded'}
                {currentUser.role === 'agency' && 'added'}
                {currentUser.role === 'company' && 'added'}
                {(currentUser.role === 'agency' ||
                  currentUser.role === 'company') && (
                  <div>
                    <div>1 Document downloaded</div>
                    <div>2 Documents Pending Viewing</div>
                  </div>
                )}
              </div>
              {/* <div className="font-size-lg opacity-8">Total 2Sales</div> */}
              <div className="divider mx-4 my-2" />
              <div className="text-center mb-2">
                <Button size="small" className="px-4 btn-neutral-info">
                  View Documents
                </Button>
              </div>
              {currentUser.role === 'candidate' && (
                <div className="text-center">
                  <Button size="small" className="px-4 btn-neutral-info">
                    Upload Documents
                  </Button>
                </div>
              )}
              {(currentUser.role === 'agency' ||
                currentUser.role === 'company') && (
                <div className="text-center">
                  <Button size="small" className="px-4 btn-neutral-info">
                    Pending Documents
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className="card-box h-100">
            <div className="m-2 text-capitalize font-size-lg text-center">
              {currentUser.role === 'candidate' && <b>Onboarding Documents</b>}
              {(currentUser.role === 'agency' ||
                currentUser.role === 'company') && <b>My Templates</b>}
            </div>
            <div className="card-content-overlay text-center py-4">
              <div className="d-70 rounded-circle bg-info text-white btn-icon mx-auto text-center">
                <FontAwesomeIcon
                  icon={['fas', 'file-powerpoint']}
                  className="display-4"
                />
              </div>
              <div className="mb-1 mt-2 text-black text-black-50">
                4 Template Uploaded
              </div>
              {/* <div className="font-size-lg opacity-8">Total Sales</div> */}
              <div className="divider mx-4 my-2" />
              <div className="text-center mb-2">
                <Button size="small" className="px-4 btn-neutral-info">
                  View Documents
                </Button>
              </div>
              <div className="text-center">
                <Button size="small" className="px-4 btn-neutral-info">
                  Upload Documents
                </Button>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Card className="card-box p-3 h-100">
            <div className="font-12 font-size-sm text-uppercase text-second mt-2">
              {currentUser.role === 'candidate' && 'Requests for information'}
              {(currentUser.role === 'agency' ||
                currentUser.role === 'company') &&
                'Candidate documents due to expire'}
            </div>
            <div className="d-flex py-2 align-items-center">
              <div className="d-50 rounded border-0 card-icon-wrapper flex-shrink-0 bg-first text-white btn-icon text-center shadow-first mr-3">
                <FontAwesomeIcon
                  icon={['far', 'comment-dots']}
                  className="display-4"
                />
              </div>
              <div className="ml-1">7</div>
            </div>
            <div className="text-center mt-3">
              <Button size="small" className="px-4 btn-neutral-info">
                Respond
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className="card-box p-3 h-100">
            <div className="font-12 font-size-sm text-uppercase text-second mt-2">
              {currentUser.role === 'candidate' &&
                'Remaining Documents to upload'}
              {(currentUser.role === 'agency' ||
                currentUser.role === 'company') &&
                'Placements documents due to expire'}
            </div>
            <div className="d-flex py-2 align-items-center">
              <div className="d-50 rounded border-0 card-icon-wrapper flex-shrink-0 bg-warning text-white btn-icon text-center shadow-warning mr-3">
                <FontAwesomeIcon
                  icon={['fas', 'map-marked-alt']}
                  className="display-4"
                />
              </div>
              <div className="ml-1">5</div>
            </div>
            <div className="text-center mt-3">
              <Button size="small" className="px-4 btn-neutral-info">
                View
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className="card-box p-3 h-100">
            <div className="font-12 font-size-sm text-uppercase text-second mt-2">
              {currentUser.role === 'candidate' && 'Requests for information'}
              {currentUser.role === 'agency' &&
                'Client documents due to expire'}
              {currentUser.role === 'company' &&
                'Agency documents due to expire'}
            </div>
            <div className="d-flex py-2 align-items-center">
              <div className="d-50 rounded border-0 card-icon-wrapper flex-shrink-0 bg-danger text-white btn-icon text-center mr-3 shadow-danger">
                <FontAwesomeIcon
                  icon={['far', 'envelope']}
                  className="display-4"
                />
              </div>
              <div className="ml-1">2</div>
            </div>
            <div className="text-center mt-3">
              <Button size="small" className="px-4 btn-neutral-info">
                View Documents
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <CardContent className="bg-brand-facebook h-100 text-white">
            <div className="font-12 font-size-sm text-uppercase text-white mt-2">
              Tasks Overview
            </div>
            <div className="d-flex py-2 align-items-center text-white">
              <div className="d-50 rounded border-0 card-icon-wrapper flex-shrink-0 bg-success text-white btn-icon text-center shadow-success mr-3">
                <FontAwesomeIcon
                  icon={['fas', 'tachometer-alt']}
                  className="display-4"
                />
              </div>
              <div className="ml-1 text-white">
                2 tasks
                <br />
                <div className="mb-2 font-style text-white">due today</div>{' '}
              </div>
            </div>

            {/* <div className="text-black-50 mb-2">
              <a
                className="text-first"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                See clients
              </a>{' '}
              that accepted your invitation to connect.
            </div> */}
          </CardContent>
        </Grid>
      </Grid>

      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
