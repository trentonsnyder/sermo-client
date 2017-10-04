import axios from 'axios'
import Cookies from 'universal-cookie'

let cookies = new Cookies()

export const getDocuments = (client) => dispatch => {
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'GET_DOCUMENTS_LOADING'})
  instance.get(`/api/v1/clients/${client.id}/documents`)
  .then(res => {
    dispatch({type: 'GET_DOCUMENTS', data: res.data.documents})
    dispatch({type: 'GET_DOCUMENTS_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'GET_DOCUMENTS_NOT_LOADING'})
  })
}

export const uploadDocument = (document, client) => dispatch => {
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
    }
  })
  let data = new FormData();
  data.append('document', document, document.name)
  dispatch({type: 'CREATE_DOCUMENT_LOADING'})
  instance.post(`/api/v1/clients/${client.id}/documents`, data)
  .then(res => {
    dispatch({type: 'CREATE_DOCUMENT', data: res.data.document})
    dispatch({type: 'CREATE_DOCUMENT_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'CREATE_DOCUMENT_NOT_LOADING'})
  })
}

export const deleteDocuments = (documents, client) => dispatch => {
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  dispatch({type: 'DELETE_DOCUMENT_LOADING'})
  instance.delete(`/api/v1/clients/${client.id}/documents`, {data: {documents}})
  .then(res => {
    dispatch({type: 'DELETE_DOCUMENT', data: res.data.documents})
    dispatch({type: 'DELETE_DOCUMENT_NOT_LOADING'})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: 'DELETE_DOCUMENT_NOT_LOADING'})
  })
}

export const assignUrl = (document) => {
  const instance = axios.create({
    headers: {
      'Authorization': cookies.get('sermoToken'),
      'Accept': 'application/json'
    }
  })
  instance.get(`/api/v1/clients/${document.client_id}/documents/${document.id}/assign_url`)
  .then(res => {
    let et = document.extension_type
    if (et === 'application/pdf' || et === 'image/jpdg' || et === 'image/png' || et === 'image/svg+xml' )
      window.open(res.data.url)
    else
      window.location.assign(res.data.url)
  })
  .catch(error => {
    console.log(error)
  })
}