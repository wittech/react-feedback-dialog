import React, { useEffect } from 'react';
import styled from 'styled-components';

import Button from './button';

const ModalWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-flow: column nowrap;
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 584px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
    rgba(0, 0, 0, 0.12) 0px 9px 46px 8px, rgba(0, 0, 0, 0.2) 0px 11px 15px -7px;
`;

const Header = styled.p`
  flex-grow: 0;
  text-align: left;
  background-color: grey;
  font-weight: 900;
  color: white;
  margin: 0px;
  padding: 16px;
`;

const Body = styled.div`
  flex-grow: 1;
`;

const Footer = styled.div`
  flex-grow: 0;
  text-align: right;
  border-top: 1px solid rgb(224, 224, 224);
  padding: 16px 0px;
`;

const DefaultFooter = ({ onOk, onCancel }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
  });

  useEffect(() => {
    return () => {
      document.body.style.overflowY = null;
    };
  }, []);

  return (
    <Footer>
      <Button style={{ marginBottom: 0 }} onClick={onCancel} text="cancel" />
      <Button
        type="primary"
        style={{ marginBottom: 0 }}
        onClick={onOk}
        text="send"
      />
    </Footer>
  );
};

const Modal = ({ children, ...props }) => {
  return (
    <ModalWrap {...props}>
      <ModalContainer>{children}</ModalContainer>
    </ModalWrap>
  );
};

export default Modal;

export { Header, Body, Footer, DefaultFooter };
