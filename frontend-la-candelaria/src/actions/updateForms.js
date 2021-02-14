const updateForms = (form, loading, data = null) => {
  return {
    type: `UPDATE_FORM_DATA`,
    payload: {form, loading, data}
  }
}

export default updateForms;