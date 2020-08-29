import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class PatientsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
			hkid: '',
            dob: '',
            country: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }
    handleChangeInputHkid = async event => {
        const hkid = event.target.value
        this.setState({ hkid })
    }
    handleChangeInputDob = async event => {
        const dob = event.target.value
        this.setState({ dob })
    }
    handleChangeInputCountry = async event => {
        const country = event.target.value
        this.setState({ country })
    }

    handleUpdatePatient = async () => {
        const { id, name, hkid, dob, country } = this.state
        const arrayCountry = country.split('/')
        const payload = { name, hkid, dob, country: arrayCountry }

        await api.updatePatientById(id, payload).then(res => {
            window.alert(`Patient updated successfully`)
            this.setState({
                name: '',
                hkid: '',
                dob: '',
                country: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const patient = await api.getPatientById(id)

        this.setState({
            name: patient.data.data.name,
            hkid: patient.data.data.hkid,
			dob: patient.data.data.dob,
            country: patient.data.data.country.join('/'),
        })
    }

    render() {
        const { name, hkid, dob, country } = this.state
        return (
            <Wrapper>
                <Title>Create Patient</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
				
				<Label>HKID: </Label>
                <InputText
                    type="text"
                    value={hkid}
                    onChange={this.handleChangeInputHkid}
                />
				
				<Label>DOB: </Label>
                <InputText
                    type="text"
                    value={dob}
                    onChange={this.handleChangeInputDob}
                />

                <Label>Country: </Label>
                <InputText
                    type="text"
                    value={country}
                    onChange={this.handleChangeInputCountry}
                />

                <Button onClick={this.handleUpdatePatient}>Update Patient</Button>
                <CancelButton href={'/patients/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default PatientsUpdate