import colors from './colors';

export default props => {
  const handleModalBackgroundOnClick = () => {
    props.setModalVisible(false);
  };

  const handleModalOnClick = e => {
    e.stopPropagation();
  };

  const handleOnClickClose = () => {
    props.setModalVisible(false);
  };

  const { title, imageUrl, content } = props.modalData || {
    title: '',
    imageUrl: '',
    content: <></>,
  };

  return (
    <>
      <div className="modal-background" onClick={handleModalBackgroundOnClick}>
        <div className="modal" onClick={handleModalOnClick}>
          <a className="close-button" onClick={handleOnClickClose}>
            CLOSE
          </a>
          <div className="scroll-view">
            {imageUrl ? <img src={imageUrl} /> : null}
            <div className="content">
              <h1>{title}</h1>
              {content}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal-background {
          opacity: ${props.visible ? '1' : '0'};
          visibility: ${props.visible ? 'visible' : 'hidden'};
        }
      `}</style>
      <style jsx>{`
        .modal-background {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 200;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
          transition: opacity 0.1s ease, visibility 0.1s ease;
        }
        .modal {
          position: absolute;
          width: 800px;
          height: 100%;
          margin-top: 20px;
          max-width: calc(100vw - 40px);
          max-height: calc(100vh - 40px);
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
          background-color: ${colors.lightblue};
          color: ${colors.pink};
        }
        @media screen and (min-width: 600px) {
          .modal {
            margin-top: 40px;
            max-width: calc(100vw - 80px);
            max-height: calc(100vh - 80px);
          }
        }
        .scroll-view {
          overflow-y: auto;
        }
        img {
          width: 100%;
          max-height: 50vh;
          object-fit: cover;
        }
        .close-button {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 5px;
          padding-bottom: 0px;
          font-family: 'TypoPRO Bebas Neue', sans-serif;
          font-size: 2em;
          user-select: none;
          cursor: pointer;
          background-color: ${colors.yellow};
        }
        .content {
          box-sizing: border-box;
          width: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          font-size: calc(1em + 0.3vw);
        }
        @media screen and (min-width: 600px) {
          .content {
            padding: 40px;
          }
        }
        .content h1 {
          width: 100%;
          font-size: 2em;
          text-align: center;
        }
      `}</style>
    </>
  );
};
