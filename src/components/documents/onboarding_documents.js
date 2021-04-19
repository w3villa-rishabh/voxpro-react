import React, { useState } from 'react';

import { Card, Button, Grid, CardContent } from '@material-ui/core';

import { getCurrentUser } from '../../helper';

import PostAddIcon from '@material-ui/icons/PostAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function OnBoardDocument() {
  const [documents, setDocuments] = useState([]);
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

  return (
    <>
      <div className="page-title">
        <PostAddIcon />
        <div className="title">
          <h5 className="heading">Document Management</h5>
          <p>
            Upload, Store, Update and Manage your information and document
            request.
          </p>
        </div>
        <Button className="btn-neutral-info hover-scale-sm px-4 float-right">
          <span className="px-2">Select Doc Type</span>
        </Button>
      </div>

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
          <Card className="card-box">
            <div className="m-2 text-capitalize font-size-lg text-center">
              <b>Personal Documents</b>
            </div>
            <div className="card-content-overlay text-center py-4">
              <div className="d-70 rounded-circle bg-info text-white btn-icon mx-auto text-center">
                <FontAwesomeIcon
                  icon={['fas', 'id-card-alt']}
                  className="display-4"
                />
              </div>
              <div className="mb-1 mt-2 text-black text-black-50">
                4 Documents Uploaded
              </div>
              {/* <div className="font-size-lg opacity-8">Today's Sales</div> */}
              <div className="divider mx-4 my-2" />
              <div className="text-center mb-2">
                <a href="/view-document">
                  <Button size="small" className="px-4 btn-neutral-info">
                    View Documents
                  </Button>
                </a>
              </div>
              <div className="text-center">
                <a href="/upload">
                  <Button size="small" className="px-4 btn-neutral-info">
                    Upload Documents
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className="card-box">
            <div className="m-2 text-capitalize font-size-lg text-center">
              <b>Limited Company Documents</b>
            </div>
            <div className="card-content-overlay text-center py-4">
              <div className="d-70 rounded-circle bg-info text-white btn-icon mx-auto text-center shadow-primary">
                <FontAwesomeIcon
                  icon={['fas', 'file-word']}
                  className="display-4"
                />
              </div>
              <div className="mb-1 mt-2 text-black text-black-50">
                3 Documents Uploaded
              </div>
              {/* <div className="font-size-lg opacity-8">Monthly Income</div> */}
              <div className="divider mx-4 my-2" />
              <div className="text-center">
                <Button size="small" className="px-4 btn-neutral-info mb-2">
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
        <Grid item md={3} xs={12}>
          <Card className="card-box">
            <div className="m-2 text-capitalize font-size-lg text-center">
              <b> General Documentss</b>
            </div>
            <div className="card-content-overlay text-center py-4">
              <div className="d-70 rounded-circle bg-info text-white btn-icon mx-auto text-center shadow-info">
                <FontAwesomeIcon icon={['fas', 'file']} className="display-4" />
              </div>
              <div className="mb-1 mt-2 text-black text-black-50">
                2 Documents Uploaded
              </div>
              {/* <div className="font-size-lg opacity-8">Total 2Sales</div> */}
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
        <Grid item md={3} xs={12}>
          <Card className="card-box">
            <div className="m-2 text-capitalize font-size-lg text-center">
              <b>Onboarding Documents</b>
            </div>
            <div className="card-content-overlay text-center py-4">
              <div className="d-70 rounded-circle bg-info text-white btn-icon mx-auto text-center shadow-info">
                <FontAwesomeIcon
                  icon={['fas', 'file-powerpoint']}
                  className="display-4"
                />
              </div>
              <div className="mb-1 mt-2 text-black text-black-50">
                4 Document Uploaded
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
              Requests
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
              Documents
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
              Documents due to expire
            </div>
            <div className="d-flex py-2 align-items-center">
              <div className="d-50 rounded border-0 card-icon-wrapper flex-shrink-0 bg-danger text-white btn-icon text-center mr-3">
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

      <div className="ads-wrapper mt-4">
        <iframe
          frameBorder="0"
          height="100"
          id="aswift_0"
          marginHeight="0"
          marginWidth="0"
          name="aswift_0"
          scrolling="no"
          src='https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-2280007608584385&amp;format=320x100&amp;output=html&amp;h=100&amp;slotname=8619412948&amp;adk=3820663941&amp;adf=2444517951&amp;w=320&amp;lmt=1480764428&amp;flash=23.0.0&amp;url=http%3A%2F%2Fafghanfashion.com%2Fen%2F&amp;wgl=1&amp;dt=1480764431906&amp;bpp=32&amp;bdt=2353&amp;fdt=107&amp;idt=1645&amp;shv=r20161128&amp;cbv=r20161117&amp;saldr=aa&amp;correlator=2085870981537&amp;frm=20&amp;ga_vid=748426410.1477631041&amp;ga_sid=1480764434&amp;ga_hid=2124941115&amp;ga_fc=0&amp;pv=2&amp;iag=3&amp;icsg=2&amp;nhd=1&amp;dssz=2&amp;mdo=0&amp;mso=0&amp;u_tz=330&amp;u_his=2&amp;u_java=0&amp;u_h=768&amp;u_w=1366&amp;u_ah=728&amp;u_aw=1366&amp;u_cd=24&amp;u_nplug=5&amp;u_nmime=7&amp;dff=arial&amp;dfs=13&amp;adx=202&amp;ady=2719&amp;biw=1349&amp;bih=431&amp;eid=33509839%2C575144605&amp;oid=3&amp;rx=0&amp;eae=0&amp;fc=16&amp;pc=1&amp;brdim=0%2C0%2C0%2C0%2C1366%2C0%2C1366%2C728%2C1366%2C431&amp;vis=1&amp;rsz=%7C%7CleEr%7C&amp;abl=CS&amp;ppjl=t&amp;pfx=0&amp;fu=16&amp;bc=1&amp;ifi=1&amp;xpc=pHL5cE1BG4&amp;p=http%3A//afghanfashion.com&amp;dtd=2076"'
          width="100%"></iframe>
      </div>
    </>
  );
}
