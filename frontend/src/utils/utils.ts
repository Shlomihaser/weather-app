

const parseDate = (dateString: string ): string => {
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-');
    return `${day}/${month}/${year} at ${timePart}`;
};




export default parseDate;