// validation pattern ------------
const pattern = {
    text: '(^[A-Za-z]*$)',
    textWithSpace: '(^[A-Za-z ]*$)',
    number: '(^[0-9]*$)',
    textNumber: '(^[A-Za-z0-9]*$)',    
    decimal: '(^[0-9.]*$)',    
    email: "(^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$)",
    mobile: '(^[0-9]{10}$)',
    panCard: '(^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$)',
    aadharCard: '',
    gstNoOnly:'(^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$)',
}

// localStorage Names ------------
const storage = {
    authLogin: 'authlogin'
}
// ------------

// datatable related ------------
const pageLimit = [5, 10, 25, 50, 100, 250, 500]
// ------------

export {
    pattern,
    storage,
    pageLimit
}