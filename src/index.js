import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import Subform from './subform'
import setFieldData from 'final-form-set-field-data'
import AutoSave from './AutoSave'
import Moreinfo from './redirect'
import Header from './header'
import Signature from './signature'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

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

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

const App = () => (

  <Styles>
      <div><Header /></div>
      <Form
      onSubmit={save /* NOT USED, but required */}
      mutators={{ setFieldData }}
      subscription={{} /* No need to subscribe to anything */}
      validate={values => {
         const errors = {}
         if (!values.email) {
           errors.email = 'Required'
         }
         return errors
       }}
    >
      {({ mutators }) => (
        <div className="form">
          {/* Don't even need a <form> tag */}

          {/* 👇 👇 👇 👇 */}
          <AutoSave setFieldData={mutators.setFieldData} save={save} />
          {/* ☝️ ️☝️ ️☝️ ️️️️☝️ ️️*/}


           <h2 >Account information</h2>

               <div>
                 <label>Email Address *</label>
                     <Field
                       name="email"
                       component="input"
                       type="email"
                       placeholder="Email"
                       validate={required}
                     />
                     <Error name="email" />
                 <SavingIndicator name="email" />
               </div>

          <h2 >Company information</h2>

          <div>
            <label >Select a Business Category *</label>

            <Field name="category" type="select" component="select">
              <option value="food">FOOD/DRINKS/HOSPITALITY:</option>
              <option value="accomodation">Accomodation</option>
              <option value="bar">Bar/Club</option>
              <option value="foodtruck">Food Truck/Cart</option>
              <option value="catering">Catering</option>
              <option value="health">HEALTH & BEAUTY:</option>
              <option value="beauty">Beauty/Barber/Spa</option>
              <option value="dentistry">Dentistry</option>
              <option value="medical">Medical Practitioners/Services</option>
            </Field>
             <SavingIndicator name="category" />
          </div>

        <div>
          <label>Email Address *</label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
                validate={required}
              />
              <Error name="email" />
          <SavingIndicator name="email" />
        </div>

        <div>
          <label>Company Name *</label>
          <Field
            name="CompanyName"
            component="input"
            type="text"
            placeholder="Company Name"
            validate={required}
          />
      <Error name="CompanyName" />
      <SavingIndicator name="CompanyName" />
        </div>

        <div>
          <label>Trading Name</label>
          <Field
            name="TradingName"
            component="input"
            type="text"
          />
        <Error name="TradingName" />
      <SavingIndicator name="TradingName" />
        </div>

        <div>
          <label>ABN/ACN *</label>
          <Field
            name="ABN"
            component="input"
            type="number"
            placeholder="51 824 753 556"
            validate={required}
          />
            <Error name="ABN" />
             <SavingIndicator name="ABN" />
        </div>

        <div >
          <label >What is your Company Type? *</label>
          <div >
           <label>
             <Field
               name="company"
               component="input"
               type="radio"
               value="limited"
             />{' '}
             Limited Company
           </label>

           <label>
             <Field
               name="company"
               component="input"
               type="radio"
               value="parterner"
             />{' '}
             Paternership
           </label>

           <label>
             <Field
               name="company"
               component="input"
               type="radio"
               value="SoleTrader"
             />{' '}
            Sole Trader
           </label>

           <label>
             <Field
               name="company"
               component="input"
               type="radio"
               value="NGO"
             />{' '}
            Non-profit Organization
           </label>
        <SavingIndicator name="company" />
        </div>
       </div>

        <div>
          <label>Business Contact Number *</label>
          <Field
            name="businessno"
            component="input"
            type="number"
            placeholder="+61 0433"
            validate={required}
          />
            <Error name="businessno" />
            <SavingIndicator name="businessno" />
        </div>

        <div>
          <label>Building / House Name or Number *</label>
          <Field
            name="building"
            component="input"
            type="text"
            validate={required}
          />
            <Error name="building" />
            <SavingIndicator name="building" />
        </div>

        <div>
          <label>Street Name *</label>
          <Field
            name="streetname"
            component="input"
            type="text"
            placeholder="Street Name"
            validate={required}
          />
            <Error name="streetname" />
            <SavingIndicator name="streetname" />
        </div>

        <div>
          <label>City / Suburb *</label>
          <Field
            name="city"
            component="input"
            type="text"
            placeholder="city"
            validate={required}
          />
        <Error name="city" />
        <SavingIndicator name="city" />
        </div>

        <div>
          <label>State *</label>
          <Field
            name="state"
            component="input"
            type="text"
            placeholder="state"
            validate={required}
          />
        <Error name="state" />
        <SavingIndicator name="state" />
        </div>

        <div>
          <label>Postcode *</label>
          <Field
            name="postcode"
            component="input"
            type="number"
            placeholder="4100"
            validate={required}
          />
            <Error name="postcode" />
            <SavingIndicator name="postcode"/>
        </div>


        <h2>Directors Details</h2>
        <div>
          <label>Full Name *</label>
          <Field
            name="fullname"
            component="input"
            type="text"
            placeholder="fullname"
            validate={required}
          />
          <Error name="fullname" />
          <SavingIndicator name="fullname"/>
        </div>

        <div>

          <label>Date of Birth *</label>

          <Field
            name="birth"
            component="input"
            type="date"
            validate={required}
          />
          <Error name="birth" />
          <SavingIndicator name="birth"/>

        </div>

        <div>
          <label>Mobile number *</label>
          <Field
            name="mobile"
            component="input"
            type="number"
            validate={required}
          />
          <Error name="mobile" />
          <SavingIndicator name="mobile"/>
        </div>

        <div>
          <label>Building / House Name or number *</label>
          <Field
            name="building"
            component="input"
            type="text"
            validate={required}
          />
          <Error name="building" />
          <SavingIndicator name="building" />
        </div>

        <div>
          <label>Street Name *</label>
          <Field
            name="streetname"
            component="input"
            type="text"
            placeholder="Street Name"
            validate={required}
          />
          <Error name="streetname" />
          <SavingIndicator name="streetname" />
        </div>

        <div>
          <label>City / Suburb *</label>
          <Field
            name="city"
            component="input"
            type="text"
            placeholder="city"
            validate={required}
          />
          <Error name="city" />
          <SavingIndicator name="city" />
        </div>

        <div>
          <label>State *</label>
          <Field
            name="state"
            component="input"
            type="text"
            placeholder="state"
            validate={required}
          />
          <Error name="state" />
          <SavingIndicator name="state" />
        </div>

        <div>
          <label>Postcode *</label>
          <Field
            name="postcode"
            component="input"
            type="number"
            placeholder="4100"
            validate={required}
          />
          <Error name="postcode" />
          <SavingIndicator name="postcode" />
        </div>

         <div>

          <label>We will require photo id both sides (License or Passport)
              from you to be submitted with your application.
              Please now upload the front image of your license/passport. *
              Images taken with your phone camera are accepted. *</label>
        <Field
            name="photo"
            component="input"
            type="file"
            validate={required}
          />
          <Error name="photo" />
          <SavingIndicator name="photo"  />
        </div>

        <div>
          <label>
          We now require an image of the back of your license.
          Please upload file now.
          Note - If you are using your passport,
          there is no need to upload the back of your passport
           & you can move onto the next question.
       </label>
          <Field
            name="photo2"
            component="input"
            type="file"
            validate={required}
          />
      <Error name="photo2" />
      <SavingIndicator name="photo2"  />

        </div>
        <div>
              <Subform />
       </div>

       <h2>Business Bank Account Details</h2>
           <div>
             <label>BSB number *</label>
             <Field
               name="bsb"
               component="input"
               type="number"
               validate={required}
             />
             <Error name="bsb" />
             <SavingIndicator name="bsb"  />
           </div>

           <div>
             <label>Account number *</label>
             <Field
               name="acc"
               component="input"
               type="number"
               validate={required}
             />
             <Error name="acc" />
             <SavingIndicator name="acc"  />
           </div>

           <div>
             <label>Account Name *</label>
             <Field
               name="accname"
               component="input"
               type="text"
               validate={required}
             />
             <Error name="accname" />
             <SavingIndicator name="accname"  />
           </div>

           <div>
             <label>
                 Now please upload a copy of the Businesses
                 Bank Statement. * Please note: This needs to
                 be an image (photo or scanned) of your paper
                 statement and NOT a screen shot of your
                 banking statement.
             </label>

             <Field
               name="statement"
               component="input"
               type="file"
               validate={required}
             />
           <Error name="statement" />
           <SavingIndicator name="statement"  />
           </div>

           <div>
             <label>
                 Would you like your fees to come out of a different account
                 from our settlements?
             </label>
             <div>
               <label>
                 <Field
                   name="oneaccount"
                   component="input"
                   type="radio"
                   value="yes"

                 />{' '}
                 Yes
               </label>

               <label>
                 <Field
                   name="oneaccount"
                   component="input"
                   type="radio"
                   value="no"
                 />{' '}
                 No
               </label>
             </div>
           </div>

           <Condition when="oneaccount" is="yes">
               <label>
                   Different account statement
               </label>
               <div>
                 <label>BSB number *</label>
                 <Field
                   name="bsb1"
                   component="input"
                   type="number"
                   validate={required}
                 />
              <Error name="bsb1" />
                 <SavingIndicator name="bsb1"  />
               </div>

               <div>
                 <label>Account number *</label>
                 <Field
                   name="acc1"
                   component="input"
                   type="number"
                   validate={required}
                 />
                <Error name="acc1" />
                 <SavingIndicator name="acc1"  />
               </div>

               <div>
                 <label>Account Name *</label>
                 <Field
                   name="accname1"
                   component="input"
                   type="text"
                   validate={required}
                 />
             <Error name="accname1" />
                 <SavingIndicator name="accname1"  />
               </div>

               <div>
                 <label>
                     Now please upload a copy of the Businesses
                     Bank Statement. * Please note: This needs to
                     be an image (photo or scanned) of your paper
                     statement and NOT a screen shot of your
                     banking statement.
                 </label>

                 <Field
                   name="statement1"
                   component="input"
                   type="file"
                   validate={required}
                 />
             <Error name="statement1" />
               <SavingIndicator name="statement1"  />
               </div>
           </Condition>

           <div>
             <label>
                 We will require you to upload proof of business (which can be a
                utility/rates/rent bill issued in the last 3 months that confirms
                business name & address). *
             </label>

             <Field
               name="proof"
               component="input"
               type="file"
               validate={required}
             />
            <Error name="proof" />
           <SavingIndicator name="proof"  />
           </div>

           <div>
             <label>
                 Do you have any other documents to upload for your
                 application? This can include a copy of your business
                 card, etc.
             </label>
             <Field
               name="otherdoc"
               component="input"
               type="file"
             />
         <SavingIndicator name="otherdoc"  />
           </div>

           <h2>Business Information</h2>
               <div>
                 <label>
                     Where will you use Tappr? *
                     Choose as many as you like
                 </label>
                 <div>
                   <label>
                     <Field
                       name="location"
                       component="input"
                       type="radio"
                       value="fixedlocation"

                     />{' '}
                     At a fixed location(Bricks & mortor)
                   </label>

                   <label>
                     <Field
                       name="location"
                       component="input"
                       type="radio"
                       value="otherlocation"
                     />{' '}
                     On the road or mobile
                   </label>
                 </div>
               </div>

               <Condition when="location" is="fixedlocation">
                   <div>
                     <label>
                         Do customers pay in arrears or in advance for
                         services/goods provided? * Choose as many as you like
                     </label>
                     <div>
                       <label>
                         <Field
                           name="arrears"
                          component="input"
                           type="radio"
                           value="arrears"
                         />{' '}
                         Arrears
                       </label>

                       <label>
                         <Field
                           name="arrears"
                           component="input"
                           type="radio"
                           value="advance"
                         />{' '}
                         Advance
                       </label>
                     </div>
                      <SavingIndicator name="arrears" />
                   </div>
               </Condition>

               <Condition when="location" is="otherlocation">
                   <div>
                    <label>What type of operating system will you be using with
                        your Tappr? *
                    </label>
                    <div>
                      <label>
                        <Field
                          name="system"
                          component="input"
                          type="radio"
                          value="android"
                        />{' '}
                        Android
                      </label>

                      <label>
                        <Field
                          name="system"
                          component="input"
                          type="radio"
                          value="ios"
                        />{' '}
                        IOS
                      </label>

                      <label>
                        <Field
                          name="system"
                          component="input"
                          type="radio"
                          value="both"
                        />{' '}
                        Both
                      </label>
                    </div>
                     <SavingIndicator name="system" />
                  </div>
               </Condition>

               <div>
                 <label>Estimated Annual Turnover *</label>
                 <Field name="turnover" component="select">
                   <option value="0">$0 - $15,000</option>
                   <option value="15">$15,000 - $50,000</option>
                   <option value="50">$50,000 - $150,000</option>
                   <option value="150">$150,000 - $300,000</option>
                   <option value="300">$300,000 - $500,000</option>
                   <option value="500">$500,000 - $750,000</option>
                   <option value="750">$750,000 - $1,000,000</option>
                   <option value="1000">Over $1,000,000</option>
                 </Field>
                 <SavingIndicator name="turnover" />
               </div>

               <div>
                 <label>Estimated annual credit card turnover *</label>
                 <Field name="creditturnover" component="select">
                   <option value="0">$0 - $15,000</option>
                   <option value="15">$15,000 - $50,000</option>
                   <option value="50">$50,000 - $150,000</option>
                   <option value="150">$150,000 - $300,000</option>
                   <option value="300">$300,000 - $500,000</option>
                   <option value="500">$500,000 - $750,000</option>
                   <option value="750">$750,000 - $1,000,000</option>
                   <option value="1000">Over $1,000,000</option>
                 </Field>
                 <SavingIndicator name="creditturnover" />
               </div>

               <div>
                 <label>Average Transaction Amount? *</label>
                 <Field name="amount" component="select">
                   <option value="0">$15 or less</option>
                   <option value="15">$15 - $50</option>
                   <option value="50">$50 - $150</option>
                   <option value="150">$150 - $500</option>
                   <option value="500">$500,000 - $1,000,000</option>
                   <option value="1000">Over $1,000</option>
                 </Field>
                 <SavingIndicator name="amount" />
               </div>

               <div>
                 <label>
                     What would be your highest single transaction amount to be
                     processed? * <div ><Moreinfo /></div>
                 </label>
                 <Field
                   name="highest"
                   component="input"
                   type="number"
                   validate={required}
                 />
                 <Error name="highest" />
                 <SavingIndicator name="highest" />
               </div>

               <div>
                 <label>
                     Average card sale amount? *
                 </label>
                 <Field
                   name="saleamount"
                   component="input"
                   type="number"
                   validate={required}
                 />
                 <Error name="saleamount" />
                 <SavingIndicator name="saleamount" />
               </div>

               <div>
                 <label>What is your refund policy? *</label>
                 <Field name="refund" component="select">
                   <option value="full">Full</option>
                   <option value="exchange">Exchange only</option>
                   <option value="none">None</option>
                 </Field>
                 <SavingIndicator name="refund" />
               </div>

               <div>
                 <label>
                     Within how many days do you submit refunds for Transactions? *
                 </label>
                 <Field
                   name="refunddays"
                   component="input"
                   type="number"
                   validate={required}
                 />
                 <Error name="refunddays" />
                 <SavingIndicator name="refunddays" />
               </div>

               <div>
                 <label>
                     Maximum refunds amount required *
                 </label>
                 <Field
                   name="maxrefund"
                   component="input"
                   type="number"
                   validate={required}
                 />
                 <Error name="maxrefund" />
                 <SavingIndicator name="maxrefund" />
               </div>

               <div>
                 <label>
                     Number of refunds per month? *
                 </label>
                 <Field
                   name="refundnum"
                   component="input"
                   type="number"
                   validate={required}
                 />
                 <Error name="refundnum" />
                 <SavingIndicator name="refundnum" />
               </div>

               <div>
                <label>Do you have a seasonal/market business? *</label>
                <div>
                  <label>
                    <Field
                      name="seasonal"
                      component="input"
                      type="radio"
                      value="yes"

                    />{' '}
                    Yes
                  </label>

                  <label>
                    <Field
                      name="seasonal"
                      component="input"
                      type="radio"
                      value="no"
                    />{' '}
                    No
                  </label>
                </div>
                <SavingIndicator name="seasonal" />
              </div>

             <div>
               <label>
                     Have you been referred to us by another Tappr User or
                     business? If you have been referred to us by a friend or
                     colleague, pleasesupply their name or business name as
                     we would like to reward them for recommending you! *
              </label>
               <Field
                 name="refer"
                 component="input"
                 type="text"
                 validate={required}
               />
                 <Error name="refer"/>
                 <SavingIndicator name="refer" />
             </div>


             <div>
                 <label>How do you prefer to accept payment? *</label>
              <div>
                <label>
                  <Field
                    name="onstore"
                    component="input"
                    type="checkbox"
                  />{' '}
                  On store
                </label>
                <Condition when="onstore" is={true}>
                    <div>
                    <label>
                      <Field
                        name="pay1"
                        component="input"
                        type="checkbox"
                      />{' '}
                      Payment A - $50 Per Month
                  </label>
                  <SavingIndicator name="pay1" />
                    </div>
                    <div>
                    <label>
                      <Field
                        name="pay2"
                        component="input"
                        type="checkbox"
                      />{' '}
                      Payment B - $750 Per Month
                  </label>
                  <SavingIndicator name="pay2" />
                    </div>
                </Condition>
                <label>
                  <Field
                      name="zip"
                      component="input"
                      type="checkbox"
                      value="zip"
                  />{' '}
                  Zip
                </label>
            </div>
        </div>


             <div>
                 <label>Please select payment options *</label>
              <div>
                <label>
                  <Field
                    name="cards"
                    component="input"
                    type="checkbox"
                  />{' '}
                  Cards
                </label>
                <Condition when="cards" is={true}>
                    <div>
                      <Field
                        name="agree"
                        component="input"
                        type="checkbox"
                      />
                  <label>I've read and accept this agreement<a href="https://www.firstdata.com/downloads/international/fdims-1202.pdf"
                      target='view_window'>
                      First data</a></label>
                  <SavingIndicator name="agree" />
                    </div>
                </Condition>
                <label>
                  <Field
                      name="zip0"
                      component="input"
                      type="checkbox"
                      value="zip0"
                  />{' '}
                  Zip
                </label>

                <label>
                  <Field
                      name="ali"
                      component="input"
                      type="checkbox"
                      value="ali"
                  />{' '}
                 Ali Pay
                </label>

                <label>
                  <Field
                      name="wechat"
                      component="input"
                      type="checkbox"
                      value="wechat"
                  />{' '}
                 Wechat pay
                </label>

              </div>
            </div>

            <div>
              <label>How many card readers will you be ordering? *</label>
              <Field
                name="orders"
                component="input"
                type="number"
                placeholder="10"
                validate={required}
              />
            <Error name="orders" />
            <SavingIndicator name="orders" />
            </div>
            <label>Please do your signature *</label>
            <div><Signature /></div>

        </div>
      )}
    </Form>
  </Styles>
)

render(<App />, document.getElementById("root"));
