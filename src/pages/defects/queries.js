import gql from 'graphql-tag'

export const DEFECTS_QUERY = gql`{
	defects{
		id
		pilot{
			id
			name
		}
		airplane{
			id
			reg_no
		}
		description
		status{
			id
			type
			author{
				id
				name
			}
		}
	}
}`;

export const DEFECT_QUERY = gql`
query($defect: Udefect!){
	defect(defect: $defect){
		id
		pilot{
			id
			name
		}
		airplane{
			id
			reg_no
		}
		description
		status{
			id
			type
			author{
				id
				name
			}
		}
	}
}`;

export const DATA_QUERY = gql`
{
  airplanes{
    id
    fleet
    reg_no
  }
  users{
    id
    name
    type
  }
}`

export const CREATE_DEFECT = gql`
  mutation($defect: Idefect!){
    defects{
      create(defect: $defect){
        id
      }
    }
  }
`

export const UPDATE_DEFECT = gql`
  mutation($defect: Udefect!){
    defects{
      update(defect: $defect){
        id
      }
    }
  }
`

export const DELETE_DEFECT = gql`
  mutation($defect: Udefect!){
    defects{
      archive(defect: $defect){
        id
      }
    }
  }
`