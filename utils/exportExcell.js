import { utils, writeFile } from 'xlsx';

const exportExcell = (aoa, fileName) => {
  try {
    const wb = utils.book_new();
    const ws = utils.aoa_to_sheet(aoa, { cellDates: true });
    utils.book_append_sheet(wb, ws, 'Sheet1');

    writeFile(wb, fileName);

    return [null, true];
  } catch (error) {
    return [error, null];
  }
};

export default exportExcell;
