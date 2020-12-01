const reformatDate = (date) => {

  const dateSplit = date.split('-');
  const newDate = `${dateSplit[1]}.${dateSplit[2]}.${dateSplit[0].substring(2)}`;

  return newDate
}

export default reformatDate
