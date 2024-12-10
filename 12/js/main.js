import { renderGallery } from './gallery.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { hideModal, setOnFormSubmit } from './user-form.js';
import { getData, sendData } from './fetch.js';
import { showAlert } from './util.js';
import './user-form.js';

try {
  renderGallery(await getData());
} catch (err) {
  showAlert(err.message);
}

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});
