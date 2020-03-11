import gql from "graphql-tag"

export const DATA_QUERY = gql`{
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
		manual{
			id
		}
		status{
			id
			type
		}
	}
  users{
    id
    name
    phone
    department{
      id
      name
    }
    type
  }
  airplanes{
		id
		fleet
		reg_no
	}
  rotables{
		id
		name
		part_no
		serial_no
		airplane{
			id
			reg_no
		}
	}
}`