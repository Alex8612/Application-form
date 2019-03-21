import React,{Component} from 'react'
import { Form, Field} from 'react-final-form'
import setFieldData from 'final-form-set-field-data'
import AutoSave from './AutoSave'
import { Container, Row, Col } from 'reactstrap'

const save = async values => {
  console.log('Saving', values)
  await sleep(1000)
}

const SavingIndicator = ({ name }) => (
  <Field
    name={name}
    subscription={{ data: true }}
    render={({ meta: { data: { saving } } }) =>
      saving ? <div className="saving">Saving</div> : null
    }
  />
)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : 'Required')

const ParentComponent = props => (
    <div >
            <Row>
            <button className="button2"
                 onClick={props.addChild}>Add Directors</button>
            <button className="button2"
                 onClick={props.delChild}>Delete directors</button>
             </Row>

        {props.children}
  </div>
)
const ChildComponent = props => (

        <Form
            onSubmit={save /* NOT USED, but required */}
            initialValues={{ employed: true, stooge: 'larry' }}
            mutators={{ setFieldData }}
            subscription={{} /* No need to subscribe to anything */}
            >
            {({ mutators }) => (
              <div >
                {/* 👇 👇 👇 👇 */}
                <AutoSave setFieldData={mutators.setFieldData} save={save} />
                {/* ☝️ ️☝️ ️☝️ ️️️️☝️ ️️*/}

            <div className="insideForm">
              <div className="row">
              <div className ="col-35">
                <label>Full Name *</label>
                </div>
                <Field
                  name="fullname"
                  component="input"
                  type="text"
                  placeholder="fullname"
                  validate={required}
                  className ="col-55"
                />
                <Error name="fullname" />
                <SavingIndicator name="fullname"/>
              </div>

                <div className="row">
                <div className ="col-35">
                <label>Date of Birth *</label>
                </div>
                <Field
                  name="birth"
                  component="input"
                  type="date"
                  validate={required}
                  className ="col-45"
                />
                <Error name="birth" />
                <SavingIndicator name="birth"/>
              </div>

              <div className="row">
              <div className ="col-35">
                <label>Mobile number *</label>
                </div>
                <Field
                  name="mobile"
                  component="input"
                  type="number"
                  validate={required}
                  className ="col-45"
                />
                <Error name="mobile" />
                <SavingIndicator name="mobile"/>
              </div>

              <div className="row">
              <div className ="col-35">
                <label>Building / House Name or number *</label>
                </div>
                <Field
                  name="building"
                  component="input"
                  type="text"
                  validate={required}
                  className ="col-45"
                />
                <Error name="building" />
                <SavingIndicator name="building" />
              </div>

              <div className="row">
              <div className ="col-35">
                <label>Street Name *</label>
                </div>
                <Field
                  name="streetname"
                  component="input"
                  type="text"
                  placeholder="Street Name"
                  validate={required}
                  className ="col-45"
                />
                <Error name="streetname" />
                <SavingIndicator name="streetname" />
              </div>

              <div className="row">
              <div className ="col-35">
                <label>City / Suburb *</label>
                </div>
                <Field
                  name="city"
                  component="input"
                  type="text"
                  placeholder="city"
                  validate={required}
                  className ="col-45"
                />
                <Error name="city" />
                <SavingIndicator name="city" />
              </div>

              <div className="row">
              <div className ="col-35">
                <label>State *</label>
                </div>
                <Field
                  name="state"
                  component="input"
                  type="text"
                  placeholder="state"
                  validate={required}
                  className ="col-45"
                />
                <Error name="state" />
                <SavingIndicator name="state" />
              </div>

              <div className="row">
              <div className ="col-35">
                <label>Postcode *</label>
                </div>
                <Field
                  name="postcode"
                  component="input"
                  type="number"
                  placeholder="4100"
                  validate={required}
                  className ="col-45"
                />
                <Error name="postcode" />
                <SavingIndicator name="postcode" />
              </div>

              <div >
              <div className ="col-80">
                <label>We will require photo id both sides (License or Passport)
                    from you to be submitted with your application.
                    Please now upload the front image of your license/passport. *
                    Images taken with your phone camera are accepted. *</label>
                    </div>
                <Field
                  name="photo"
                  component="input"
                  type="file"
                  validate={required}
                  className ="col-80"
                />
                <Error name="photo" />
                <SavingIndicator name="photo"  />
              </div>

              <div >
              <div className ="col-80">
                <label >
                We now require an image of the back of your license.
                Please upload file now.
                Note - If you are using your passport,
                there is no need to upload the back of your passport
                 & you can move onto the next question.
                </label>
                </div>
                <Field
                  name="photo2"
                  component="input"
                  type="file"
                  validate={required}
                  className ="col-80"
                />
            <Error name="photo2" />
            <SavingIndicator name="photo2"  />
              </div>
           </div>
        </div>
    )}
    </Form>


)

class Subform extends Component{
    constructor(props){
        super(props)
        this.state = {
        numChildren:0
        }
    }
    render(){
        const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
        children.push(<ChildComponent key={i} number={i} />);
            }
        return (
            <ParentComponent addChild={this.onAddChild} delChild =
            {this.onDelChild}>
                {children}
            </ParentComponent>
                );
            }

                onAddChild = () => {
                    this.setState({
                        numChildren: this.state.numChildren + 1
                    })
                    }
                onDelChild = () => {
                    this.setState({
                        numChildren: this.state.numChildren - 1
                    })
                }
}

export default Subform
