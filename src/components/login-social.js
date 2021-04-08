import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from '../api';

import { toast } from 'react-toastify';

import logo from '../assets/images/voxpro-images/logo_vp.png';

import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

// export default function LoginComponent() {
export default function LoginSocialComponent({ name, type }) {
  // useImperativeHandle(ref, () => ({
  //   showAlert() {
  //     alert('Child Function Called');
  //   }
  // }));

  const responseFacebook = (response) => {
    console.log('Facebook response', response);
    let socialObj = {
      email: response.email,
      fbId: response.id,
      imageUrl: response.picture.data.url,
      name: response.name
    };
    socialLogin(socialObj);
  };

  const responseGoogle = (response) => {
    console.log('Google response', response.profileObj);
    socialLogin(response.profileObj);
  };

  const socialLogin = (socialObj) => {
    if (socialObj.email) {
      toast.dismiss();
      api
        .post('/api/user/social_sign_up', {
          user: socialObj
        })
        .then((response) => {
          if (response.data.success) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            window.location.href = '/dashboard';
          } else {
            toast.error(response.data.message);
          }
        })
        .catch(() => {
          toast.success('Something went wrong!');
        });
    }
  };

  return (
    <>
      <div className="text-center">
        <h3 className="display-4 mb-2 font-weight-bold">
          <img alt="..." className="img-fluid" src={logo} width="200" />
        </h3>
      </div>
      {type === 'candidate' && (
        <div>
          <div className="text-center py-4 rounded bg-secondary my-4 fb-g-c">
            <GoogleLogin
              clientId="1021403903346-f2jvk3t2ffaln3ocsnf8sldv2mphifjf.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              isSignedIn={false}
              autoLoad={false}
              className="gb-btn"
              icon={false}>
              <FontAwesomeIcon icon={['fab', 'google']} />
              <span> {name} with Google</span>
            </GoogleLogin>

            <FacebookLogin
              appId="430160698075558"
              autoLoad={false}
              fields="name,email,picture"
              // onClick={componentClicked}
              textButton={name + ' using Facebook'}
              callback={responseFacebook}
              cssClass="fb-btn"
              icon="fa-facebook"
            />
          </div>
          <div className="text-center text-black-50 mb-3">
            <FontAwesomeIcon icon={['fas', 'lock']} className="fa-500px" /> We
            won't share your social media details
          </div>
          <div className="separator">OR</div>
        </div>
      )}
      {(type === 'company' || type === 'agency') && (
        <div className="text-center font-inc text-black-50 mb-2 mt-2">
          View our{' '}
          <a href="/subscription-plans" className="text-first">
            Subscription Plans
          </a>
        </div>
      )}
      <div className="text-center text-black-50 mb-4">
        {name} using credentials
      </div>
    </>
  );
}

LoginSocialComponent.propTypes = {
  name: PropTypes.string.isRequired
};
