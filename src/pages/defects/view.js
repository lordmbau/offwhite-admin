import React, { useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useQuery, useMutation } from '@apollo/react-hooks';
import { DEFECT_QUERY, CREATE_MANUAL, UPDATE_DEFECT, UPDATE_STATUS, DELETE_DEFECT } from "./queries"

import Loader from "../../components/loader"

import DeleteModal from "../../components/delete"
const deleteModalInstance = new DeleteModal()

const List = props => {
  const { id } = useParams()
  const history = useHistory()
  let { loading, data, error: queryError } = useQuery(DEFECT_QUERY, {
    variables:{
      defect:{
        id
      }
    }
  })
  const [remove, setRemove] = useState({})

  const [removeDefect, { error: mutationError }] = useMutation(DELETE_DEFECT)

  const saveRemove = async ({ id }) => {
    await removeDefect({ variables: { defect: { id }}})
    deleteModalInstance.hide()
    history.push("/defects")
  }

  const error = queryError || mutationError

  if(loading) return <Loader />
  if(error){
    window.Swal.fire({
      title: "OOPS!",
      icon: "error",
      text: error.message
    })
  }

  return (
    <div className="container-fluid pb-8 pt-8 pt-md-12">
      <DeleteModal remove={remove} save={saveRemove} />
      <div className="row">
        <div className="col-12 card shadow">
          <div className="card-header">
            <div className="row d-flex justify-content-between">
              <h2>Defect Details</h2>
              <div className="ml-auto">
                <button className="btn btn-outline-secondary">
                  <i className="far fa-edit"></i>
                </button>
                <button className="btn btn-outline-secondary" onClick={() => {setRemove(data.defect); deleteModalInstance.show()}}>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div class="card shadow card-stats mb-4 mb-lg-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-2 justify-content-center align-content-center">
                        <div class="icon icon-shape bg-success text-white rounded-circle shadow">
                          <i class="ni ni-single-02"></i>
                        </div>
                      </div>
                      <div class="col">
                        <h5 class="card-title text-uppercase text-muted mb-0">Pilot</h5>
                        <span class="h2 font-weight-bold">{data.defect.pilot.name}</span><br/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card shadow card-stats mb-4 mb-lg-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-2 justify-content-center align-content-center">
                        <div class="icon icon-shape bg-success text-white rounded-circle shadow">
                          <i class="ni ni-single-02"></i>
                        </div>
                      </div>
                      <div class="col">
                        <h5 class="card-title text-uppercase text-muted mb-0">Airplane</h5>
                        <span class="h2 font-weight-bold">{data.defect.airplane.reg_no}</span><br/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Description</h4>
                  </div>
                </div>
                <div className="card-body">
                  <p>{data.defect.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List