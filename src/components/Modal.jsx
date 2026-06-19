import { createPortal } from 'react-dom';

function Modal({ title, content, show, onClose, onConfirm, confirmText }) {
  if (!show) {
    return null;
  }

  return createPortal(
    <>
      <div
        className="modal modal-container"
        tabIndex="-1"
        role="dialog"
        style={{ display: 'block' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">{content}</div>
            <div className="modal-footer">
              <button
                type="button"
                className={`btn ${confirmText === `Elimina` ? `btn-danger` : `btn-success`}`}
                onClick={onConfirm}
              >
                {confirmText}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={onClose}
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default Modal;
