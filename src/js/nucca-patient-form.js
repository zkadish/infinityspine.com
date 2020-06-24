import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';
import { MDCTextField } from '@material/textfield';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';

// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const textFields = [].map.call(document.querySelectorAll('.mdc-text-field'), (el) => new MDCTextField(el));
// const helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));
// const patientForm = document.querySelector('.page');
const saveBtn = document.querySelector('.save-btn');
const test = document.querySelector('.test');
let testCanvas = null;

// html2canvas(patientForm).then((canvas) => {
//   // document.body.appendChild(canvas);
//   testCanvas = canvas;
// });

const print = () => {
  const fileName = 'nucca-patient-form.pdf';
  const patientForm = document.querySelector('.page');

  // html2canvas(test).then((canvas) => {
  //   document.body.appendChild(canvas);
  //     // document.body.appendChild(canvas);
  //   // const pdf = new JsPDF('p', 'px', 'a4');

  //   // image file type and size
  //   // pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 100, 100);
  //   // pdf.save(fileName);
  // });

  html2canvas(patientForm).then((canvas) => {
    document.body.appendChild(canvas);
    const pdf = new JsPDF('p', 'px', 'a4');

    // image file type and size
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 500, 176.5);
    pdf.save(fileName);
  });
};

// html2canvas(test).then((canvas) => {
//   document.body.appendChild(canvas);
// });

saveBtn.onclick = () => {
  // e.stopPropagation();
  // e.preventDefault();
  // html2canvas(document.querySelector('.page')).then((canvas) => {
  //   testCanvas = canvas;
  // });
  // const fileName = 'nucca-patient-form.pdf';
  // const pdf = new JsPDF('p', 'px', 'a4');

  // // image file type and size
  // pdf.addImage(testCanvas.toDataURL('image/png'), 'PNG', 0, 0, 500, 176.5);
  // pdf.save(fileName);

  // document.body.appendChild(testCanvas);
  print();
};
