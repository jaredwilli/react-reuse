module.exports = [{"name":"EyeIcon","description":"","code":"import React from 'react';\n\nconst EyeIcon = () => {\n    return (\n        <svg\n            width=\"16\"\n            height=\"16\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            viewBox=\"0 0 22 22\">\n            <g transform=\"matrix(.02146 0 0 .02146 1 1)\" fill=\"#4d4d4d\">\n                <path d=\"m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1\" />\n                <circle cx=\"466.08\" cy=\"466.02\" r=\"134.5\" />\n            </g>\n        </svg>\n    );\n};\n\nexport default EyeIcon;\n","examples":[{"name":"Example","description":"Custom message","code":"import React from 'react';\nimport EyeIcon from 'react-reuse/EyeIcon';\n\n/** Custom message */\nfunction Example() {\n    return <EyeIcon />;\n};\n\nexport default Example;\n"}]},{"name":"Hello","description":"A basic example component description for Hello component","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** A basic example component description for Hello component */\nexport default function Hello() {\n    return (\n        <div>\n            Hello world\n        </div>\n    );\n};\n\nHello.propTypes = {\n    /** Message to display */\n    message: PropTypes.string\n};\n\nHello.defaultProps = {\n    message: 'World'\n};\n","examples":[{"name":"ExampleHello","description":"Custom message","code":"import React from 'react';\nimport Hello from 'react-reuse/Hello';\n\n/** Custom message */\nfunction ExampleHello() {\n    return <Hello message=\"Nice component guys!\" />;\n};\n\nexport default ExampleHello;\n"}]},{"name":"Label","description":"Label with required field display, htmlFor,  and block styling","props":{"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML ID for associated input"},"label":{"type":{"name":"string"},"required":true,"description":"Label text"},"required":{"type":{"name":"bool"},"required":false,"description":"Display asterisk after label if true"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Label with required field display, htmlFor,  and block styling */\nconst Label = ({ htmlFor, label, required}) => {\n    return (\n        <label style={{ display: 'block' }} htmlFor={htmlFor}>\n            {label} {required && <span style={{ color: 'red' }}> *</span>}\n        </label>\n    );\n};\n\nLabel.propTypes = {\n    /** HTML ID for associated input */\n    htmlFor: PropTypes.string.isRequired,\n    /** Label text */\n    label: PropTypes.string.isRequired,\n    /** Display asterisk after label if true */\n    required: PropTypes.bool\n};\n\nexport default Label;\n","examples":[{"name":"ExampleOptional","description":"Custom message","code":"import React from 'react';\nimport Label from 'react-reuse/Label';\n\n/** Custom message */\nfunction ExampleOptional() {\n    return <Label htmlFor=\"test\" label=\"test\" />;\n};\n\nexport default ExampleOptional;\n"},{"name":"ExampleRequired","description":"Custom message","code":"import React from 'react';\nimport Label from 'react-reuse/Label';\n\n/** Custom message */\nfunction ExampleRequired() {\n    return <Label htmlFor=\"test\" label=\"test\" required />;\n};\n\nexport default ExampleRequired;\n"}]},{"name":"PasswordInput","description":"Password input with integrated label, quality tips, and show password toggle.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used by convention."},"value":{"type":{"name":"any"},"required":false,"description":"Password value"},"label":{"type":{"name":"string"},"required":false,"description":"Input label","defaultValue":{"value":"'Password'","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function called when password input value changes"},"maxLength":{"type":{"name":"number"},"required":false,"description":"Max password length accepted","defaultValue":{"value":"50","computed":false}},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder displayed when no password is entered"},"showVisibilityToggle":{"type":{"name":"bool"},"required":false,"description":"Set to true to show the toggle for displaying the currently entered password","defaultValue":{"value":"false","computed":false}},"quality":{"type":{"name":"number"},"required":false,"description":"Display password quality visually via ProgressBar, accepts a number between 0 and 100"},"error":{"type":{"name":"string"},"required":false,"description":"Validation error to display"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport ProgressBar from '../ProgressBar';\nimport EyeIcon from '../EyeIcon';\nimport TextInput from '../TextInput';\n\n/** Password input with integrated label, quality tips, and show password toggle. */\nclass PasswordInput extends React.Component {\n    constructor(props) {\n        super(props);\n\n        this.state = {\n            showPassword: false\n        };\n    }\n\n    toggleShowPassword = event => {\n        this.setState(prevState => {\n            return {\n                showPassword: !prevState.showPassword\n            };\n        });\n    }\n\n    render() {\n        const { htmlId, value, label, error,onChange, placeholder, maxLength, showVisibilityToggle, quality, ...props } = this.props;\n        const { showPassword } = this.state;\n\n        return (\n            <TextInput\n                htmlId={htmlId}\n                type={showPassword ? 'text' : 'password'}\n                placeholder={placeholder}\n                value={value}\n                label={label}\n                maxLength={maxLength}\n                error={error}\n                onChange={onChange}\n                required\n                {...props}>\n                {showVisibilityToggle &&\n                    <a onClick={this.toggleShowPassword}\n                        style={{ marginLeft: 5 }}>\n                        <EyeIcon />\n                    </a>\n                }\n                {\n                    (value.length > 0 && quality) && <ProgressBar percent={quality} width={130} />\n                }\n            </TextInput>\n        )\n    }\n}\n\n\nPasswordInput.propTypes = {\n    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n    htmlId: PropTypes.string.isRequired,\n\n    /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/\n    name: PropTypes.string.isRequired,\n\n    /** Password value */\n    value: PropTypes.any,\n\n    /** Input label */\n    label: PropTypes.string,\n\n    /** Function called when password input value changes */\n    onChange: PropTypes.func.isRequired,\n\n    /** Max password length accepted */\n    maxLength: PropTypes.number,\n\n    /** Placeholder displayed when no password is entered */\n    placeholder: PropTypes.string,\n\n    /** Set to true to show the toggle for displaying the currently entered password */\n    showVisibilityToggle: PropTypes.bool,\n\n    /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */\n    quality: PropTypes.number,\n\n    /** Validation error to display */\n    error: PropTypes.string\n};\n\nPasswordInput.defaultProps = {\n    maxLength: 50,\n    showVisibilityToggle: false,\n    label: 'Password'\n};\n\nexport default PasswordInput;\n","examples":[{"name":"ExampleAllFeatures","description":"All features enabled","code":"import React from 'react';\nimport PasswordInput from 'react-reuse/PasswordInput';\n\n/** All features enabled */\nclass ExampleAllFeatures extends React.Component {\n    constructor(props) {\n        super(props);\n\n        this.state = {\n            password: ''\n        };\n    }\n\n    getQuality() {\n        const length = this.state.password.length;\n        return length > 10 ? 100 : length * 10;\n    }\n\n    render() {\n        return (\n            <div>\n                <PasswordInput\n                    htmlId=\"password-input-example-all\"\n                    name=\"password\"\n                    placeholder=\"Enter password\"\n                    value={this.state.password}\n                    error=\"First name is required\"\n                    minLength={8}\n                    onChange={event => this.setState({ password: event.target.value })} \n                    quality={this.getQuality()}\n                    showVisibilityToggle\n                    {...this.props}\n                />\n            </div>\n        );\n    }\n};\n\nexport default ExampleAllFeatures;\n"}]},{"name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\n\nclass ProgressBar extends Component {\n    getColor = percent => {\n        if (this.props.percent === 100) { return 'green' }\n        return this.props.percent > 50\n            ? 'lightgreen'\n            : 'red';\n    }\n\n    getWidthAsPercentOfTotalWidth = () => {\n        return parseInt(this.props.width * (this.props.percent / 100), 10);\n    }\n\n    render() {\n        const { percent, width, height } = this.props;\n\n        return (\n            <div style={{ border: '1px solid #ccc', width: width }}>\n                <div style={{\n                    backgroundColor: this.getColor(percent),\n                    width: this.getWidthAsPercentOfTotalWidth(),\n                    height\n                }} />\n            </div>\n        );\n    }\n}\n\nProgressBar.propTypes = {\n    /** Percent of progress completed */\n    percent: PropTypes.number.isRequired,\n    /** Bar width */\n    width: PropTypes.number.isRequired,\n    /** Bar height */\n    height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n    height: 5\n};\n\nexport default ProgressBar;\n","examples":[{"name":"Example100Percent","description":"100% progress","code":"import React from 'react';\nimport ProgressBar from 'react-reuse/ProgressBar';\n\n/** 100% progress */\nfunction Example100Percent() {\n    return <ProgressBar percent={100} width={150} height={20} />;\n};\n\nexport default Example100Percent;\n"},{"name":"Example10Percent","description":"10% progress","code":"import React from 'react';\nimport ProgressBar from 'react-reuse/ProgressBar';\n\n/** 10% progress */\nfunction Example10Percent() {\n    return <ProgressBar percent={10} width={150} />;\n};\n\nexport default Example10Percent;\n"},{"name":"Example70Percent","description":"70% progress","code":"import React from 'react';\nimport ProgressBar from 'react-reuse/ProgressBar';\n\n/** 70% progress */\nfunction Example70Percent() {\n    return <ProgressBar percent={70} width={150} />;\n};\n\nexport default Example70Percent;\n"}]},{"name":"RegistrationForm","description":"Registration form with built-in validation.","props":{"confirmationMessage":{"type":{"name":"string"},"required":false,"description":"Message displayed upon successful submission","defaultValue":{"value":"'Thanks for registering'","computed":false}},"onSubmit":{"type":{"name":"func"},"required":true,"description":"Called when form is submitted"},"minPasswordLength":{"type":{"name":"number"},"required":false,"description":"Minimum password length","defaultValue":{"value":"8","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport TextInput from '../TextInput';\nimport PasswordInput from '../PasswordInput';\n\n/** Registration form with built-in validation. */\nclass RegistrationForm extends React.Component {\n    constructor(props) {\n        super(props);\n\n        this.state = {\n            user: {\n                email: '',\n                password: ''\n            },\n            errors: {},\n            submitted: false\n        };\n    }\n\n    onChange = event => {\n        const user = this.state.user;\n        user[event.target.name] = event.target.value;\n        this.setState({ user });\n    }\n\n    // Returns a number from 0 to 100 to represent password quality.\n    // For simplicity just returning % of minLength entered\n    // Could enhance with checks for number, special char, uniques etc.\n    passwordQuality(password) {\n        if (!password) return null;\n        if (password.length >= this.props.minPasswordLength) return 100;\n        const percentOfMinLength = parseInt(password.length / this.props.minPasswordLength * 100, 10);\n        return percentOfMinLength;\n    }\n\n    validate({ email, password }) {\n        const errors = {};\n        const { minPasswordLength } = this.props;\n\n        if (!email) errors.email = 'Email is required.';\n        if (password.length < minPasswordLength) errors.password = `Password must be ${minPasswordLength} characters long.`;\n\n        this.setState({ errors });\n\n        const formIsValid = Object.getOwnPropertyNames(errors).length === 0;\n        return formIsValid;\n    }\n\n    onSubmit = () => {\n        const { user } = this.state;\n        const formIsValid = this.validate(user);\n\n        if (formIsValid) {\n            this.props.onSubmit(user);\n            this.setState({ submitted: true });\n        }\n    }\n\n    render() {\n        const { errors, submitted } = this.state;\n        const { email, password } = this.state.user;\n\n        return (\n            submitted\n                ? <h2>{this.props.confirmationMessage}</h2>\n                : <div>\n                    <form>\n                        <TextInput\n                            htmlId=\"registration-form-email\"\n                            name=\"email\"\n                            onChange={this.onChange}\n                            label=\"Email\"\n                            value={email}\n                            error={errors.email}\n                            required />\n\n                        <PasswordInput\n                            htmlId=\"registration-form-password\"\n                            name=\"password\"\n                            value={password}\n                            onChange={this.onChange}\n                            quality={this.passwordQuality(password)}\n                            maxLength={50}\n                            error={errors.password}\n                            showVisibilityToggle />\n\n                        <input type=\"submit\" value=\"Register\"\n                            onClick={this.onSubmit} />\n                    </form>\n                </div>\n        );\n    };\n};\n\nRegistrationForm.propTypes = {\n    /** Message displayed upon successful submission */\n    confirmationMessage: PropTypes.string,\n\n    /** Called when form is submitted */\n    onSubmit: PropTypes.func.isRequired,\n\n    /** Minimum password length */\n    minPasswordLength: PropTypes.number\n};\n\nRegistrationForm.defaultProps = {\n    confirmationMessage: 'Thanks for registering',\n    minPasswordLength: 8\n};\n\nexport default RegistrationForm;\n","examples":[{"name":"ExampleRegistrationForm","description":"","code":"import React from 'react';\nimport RegistrationForm from 'react-reuse/RegistrationForm';\n\nexport default class ExampleRegistrationForm extends React.Component {\n    onSubmit = (user) => {\n        console.log(user);\n    }\n\n    render() {\n        return <RegistrationForm onSubmit={this.onSubmit} />\n    };\n}\n"}]},{"name":"StarIcon","description":"Star Icon component for star ratings","props":{"fillType":{"type":{"name":"string"},"required":false,"description":"The fill","defaultValue":{"value":"'empty'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Star Icon component for star ratings */\nconst StarIcon = ({ fillType = 'empty' }) => {\n    if (fillType === 'full') {\n        return (\n            <svg width=\"32\" height=\"32\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z\"/></svg>\n        )\n    } else if (fillType === 'half') {\n        return (\n            <svg width=\"32\" height=\"32\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1250 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zm452-262l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z\"/></svg>\n        )\n    }\n\n    return (\n        <svg width=\"32\" height=\"32\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z\"/></svg>\n    )\n};\n\nStarIcon.propTypes = {\n    /** The fill */\n    fillType: PropTypes.string\n};\n\nexport default StarIcon;\n","examples":[{"name":"Example","description":"Cool stuff dude","code":"import React from 'react';\nimport StarIcon from 'react-reuse/StarIcon';\n\n/** Cool stuff dude */\nfunction Example() {\n    return (\n        <div>\n            <StarIcon />\n            <StarIcon fillType=\"half\" />\n            <StarIcon fillType=\"full\" />\n        </div>\n    );\n};\n\nexport default Example;\n"}]},{"name":"TextInput","description":"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used."},"label":{"type":{"name":"string"},"required":true,"description":"Input label"},"type":{"type":{"name":"enum","value":[{"value":"'text'","computed":false},{"value":"'number'","computed":false},{"value":"'password'","computed":false}]},"required":false,"description":"Input type","defaultValue":{"value":"'text'","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"Mark label with asterisk if set to true","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function to call onChange"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder to display when empty"},"value":{"type":{"name":"any"},"required":false,"description":"Value"},"error":{"type":{"name":"string"},"required":false,"description":"String to display when error occurs"},"children":{"type":{"name":"node"},"required":false,"description":"Child component to display next to the input"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport Label from '../Label';\n\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\nfunction TextInput({ htmlId, name, label, type = 'text', required = false, onChange, placeholder, value, error, children, ...props }) {\n    return (\n        <div style={{ marginBottom: 16 }}>\n            <Label htmlFor={htmlId} label={label} required={required} />\n\n            <input\n                id={htmlId}\n                type={type}\n                name={name}\n                placeholder={placeholder}\n                value={value}\n                onChange={onChange}\n                style={error && { border: 'solid 1px red' }}\n                {...props} />\n                {children}\n\n            {error &&\n                <div style={{ color: 'red' }}>\n                    {error}\n                </div>\n            }\n        </div>\n    );\n};\n\nTextInput.propTypes = {\n    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n    htmlId: PropTypes.string.isRequired,\n\n    /** Input name. Recommend setting this to match object's property so a single change handler can be used. */\n    name: PropTypes.string.isRequired,\n\n    /** Input label */\n    label: PropTypes.string.isRequired,\n\n    /** Input type */\n    type: PropTypes.oneOf(['text', 'number', 'password']),\n\n    /** Mark label with asterisk if set to true */\n    required: PropTypes.bool,\n\n    /** Function to call onChange */\n    onChange: PropTypes.func.isRequired,\n\n    /** Placeholder to display when empty */\n    placeholder: PropTypes.string,\n\n    /** Value */\n    value: PropTypes.any,\n\n    /** String to display when error occurs */\n    error: PropTypes.string,\n\n    /** Child component to display next to the input */\n    children: PropTypes.node\n};\n\nexport default TextInput;\n","examples":[{"name":"ExampleError","description":"Required TextBox with Error","code":"import React from 'react';\nimport TextInput from 'react-reuse/TextInput';\n\n/** Required TextBox with Error */\nclass ExampleError extends React.Component {\n    render() {\n        return (\n            <TextInput\n                htmlId=\"example-error\"\n                label=\"First Name\"\n                name=\"firstname\"\n                onChange={() => alert('Changed!')}\n                error=\"First name is required\"\n                required\n            />\n        );\n    }\n};\n\nexport default ExampleError;\n"},{"name":"ExampleOptional","description":"Optional TextBox","code":"import React from 'react';\nimport TextInput from 'react-reuse/TextInput';\n\n/** Optional TextBox */\nclass ExampleOptional extends React.Component {\n    render() {\n        return (\n            <TextInput\n                htmlId=\"example-optional\"\n                label=\"First Name\"\n                name=\"firstname\"\n                onChange={() => alert('Changed!')}\n            />\n        );\n    }\n};\n\nexport default ExampleOptional;\n"}]},{"name":"TextInputBEM","description":"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used."},"label":{"type":{"name":"string"},"required":true,"description":"Input label"},"type":{"type":{"name":"enum","value":[{"value":"'text'","computed":false},{"value":"'number'","computed":false},{"value":"'password'","computed":false}]},"required":false,"description":"Input type","defaultValue":{"value":"'text'","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"Mark label with asterisk if set to true","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function to call onChange"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder to display when empty"},"value":{"type":{"name":"any"},"required":false,"description":"Value"},"error":{"type":{"name":"string"},"required":false,"description":"String to display when error occurs"},"children":{"type":{"name":"node"},"required":false,"description":"Child component to display next to the input"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport Label from '../Label';\n\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\nfunction TextInput({ htmlId, name, label, type = 'text', required = false, onChange, placeholder, value, error, children, ...props }) {\n    return (\n        <div className=\"text-input\">\n            <Label htmlFor={htmlId} label={label} required={required} />\n\n            <input\n                id={htmlId}\n                type={type}\n                name={name}\n                placeholder={placeholder}\n                value={value}\n                onChange={onChange}\n                className={error && 'textinput__input--state-error'}\n                {...props} />\n                {children}\n\n            {error &&\n                <div className=\"textinput__error\">\n                    {error}\n                </div>\n            }\n        </div>\n    );\n};\n\nTextInput.propTypes = {\n    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n    htmlId: PropTypes.string.isRequired,\n\n    /** Input name. Recommend setting this to match object's property so a single change handler can be used. */\n    name: PropTypes.string.isRequired,\n\n    /** Input label */\n    label: PropTypes.string.isRequired,\n\n    /** Input type */\n    type: PropTypes.oneOf(['text', 'number', 'password']),\n\n    /** Mark label with asterisk if set to true */\n    required: PropTypes.bool,\n\n    /** Function to call onChange */\n    onChange: PropTypes.func.isRequired,\n\n    /** Placeholder to display when empty */\n    placeholder: PropTypes.string,\n\n    /** Value */\n    value: PropTypes.any,\n\n    /** String to display when error occurs */\n    error: PropTypes.string,\n\n    /** Child component to display next to the input */\n    children: PropTypes.node\n};\n\nexport default TextInput;\n","examples":[{"name":"ExampleError","description":"Required TextBox with Error","code":"import React from 'react';\nimport TextInputBEM from 'react-reuse/TextInputBEM';\n\n/** Required TextBox with Error */\nclass ExampleError extends React.Component {\n    render() {\n        return (\n            <TextInputBEM\n                htmlId=\"example-error\"\n                label=\"First Name\"\n                name=\"firstname\"\n                onChange={() => alert('Changed!')}\n                error=\"First name is required\"\n                required\n            />\n        );\n    }\n};\n\nexport default ExampleError;\n"}]},{"name":"TextInputCSSModules","description":"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used."},"label":{"type":{"name":"string"},"required":true,"description":"Input label"},"type":{"type":{"name":"enum","value":[{"value":"'text'","computed":false},{"value":"'number'","computed":false},{"value":"'password'","computed":false}]},"required":false,"description":"Input type","defaultValue":{"value":"'text'","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"Mark label with asterisk if set to true","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function to call onChange"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder to display when empty"},"value":{"type":{"name":"any"},"required":false,"description":"Value"},"error":{"type":{"name":"string"},"required":false,"description":"String to display when error occurs"},"children":{"type":{"name":"node"},"required":false,"description":"Child component to display next to the input"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport Label from '../Label';\nimport styles from './textInput.css';\n\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\nfunction TextInput({ htmlId, name, label, type = 'text', required = false, onChange, placeholder, value, error, children, ...props }) {\n    return (\n        <div className={styles.fieldset}>\n            <Label htmlFor={htmlId} label={label} required={required} />\n\n            <input\n                id={htmlId}\n                type={type}\n                name={name}\n                placeholder={placeholder}\n                value={value}\n                onChange={onChange}\n                className={error && styles.inputError}\n                {...props} />\n                {children}\n\n            {error &&\n                <div className={styles.error}>\n                    {error}\n                </div>\n            }\n        </div>\n    );\n};\n\nTextInput.propTypes = {\n    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n    htmlId: PropTypes.string.isRequired,\n\n    /** Input name. Recommend setting this to match object's property so a single change handler can be used. */\n    name: PropTypes.string.isRequired,\n\n    /** Input label */\n    label: PropTypes.string.isRequired,\n\n    /** Input type */\n    type: PropTypes.oneOf(['text', 'number', 'password']),\n\n    /** Mark label with asterisk if set to true */\n    required: PropTypes.bool,\n\n    /** Function to call onChange */\n    onChange: PropTypes.func.isRequired,\n\n    /** Placeholder to display when empty */\n    placeholder: PropTypes.string,\n\n    /** Value */\n    value: PropTypes.any,\n\n    /** String to display when error occurs */\n    error: PropTypes.string,\n\n    /** Child component to display next to the input */\n    children: PropTypes.node\n};\n\nexport default TextInput;\n","examples":[{"name":"ExampleError","description":"Required TextBox with Error","code":"import React from 'react';\nimport TextInputCSSModules from 'react-reuse/TextInputCSSModules';\n\n/** Required TextBox with Error */\nclass ExampleError extends React.Component {\n    render() {\n        return (\n            <TextInputCSSModules\n                htmlId=\"example-error\"\n                label=\"First Name\"\n                name=\"firstname\"\n                onChange={() => alert('Changed!')}\n                error=\"First name is required\"\n                required\n            />\n        );\n    }\n};\n\nexport default ExampleError;\n"}]},{"name":"TextInputStyledComponents","description":"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used."},"label":{"type":{"name":"string"},"required":true,"description":"Input label"},"type":{"type":{"name":"enum","value":[{"value":"'text'","computed":false},{"value":"'number'","computed":false},{"value":"'password'","computed":false}]},"required":false,"description":"Input type","defaultValue":{"value":"'text'","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"Mark label with asterisk if set to true","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function to call onChange"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder to display when empty"},"value":{"type":{"name":"any"},"required":false,"description":"Value"},"error":{"type":{"name":"string"},"required":false,"description":"String to display when error occurs"},"children":{"type":{"name":"node"},"required":false,"description":"Child component to display next to the input"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport Label from '../Label';\nimport styled from 'styled-components';\n\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\nfunction TextInput({ htmlId, name, label, type = 'text', required = false, onChange, placeholder, value, error, children, ...props }) {\n\n    const Fieldset = styled.div`\n        margin-bottom: 16px;\n    `;\n\n    const Error = styled.div`\n        color: red;\n    `;\n\n    const Input = styled.input`\n        border: ${error && '1px solid red'};\n        display: block;\n    `;\n\n    return (\n        <Fieldset>\n            <Label htmlFor={htmlId} label={label} required={required} />\n\n            <Input\n                id={htmlId}\n                type={type}\n                name={name}\n                placeholder={placeholder}\n                value={value}\n                onChange={onChange}\n                {...props} />\n                {children}\n\n            {error && <Error>{error}</Error>}\n        </Fieldset>\n    );\n};\n\nTextInput.propTypes = {\n    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n    htmlId: PropTypes.string.isRequired,\n\n    /** Input name. Recommend setting this to match object's property so a single change handler can be used. */\n    name: PropTypes.string.isRequired,\n\n    /** Input label */\n    label: PropTypes.string.isRequired,\n\n    /** Input type */\n    type: PropTypes.oneOf(['text', 'number', 'password']),\n\n    /** Mark label with asterisk if set to true */\n    required: PropTypes.bool,\n\n    /** Function to call onChange */\n    onChange: PropTypes.func.isRequired,\n\n    /** Placeholder to display when empty */\n    placeholder: PropTypes.string,\n\n    /** Value */\n    value: PropTypes.any,\n\n    /** String to display when error occurs */\n    error: PropTypes.string,\n\n    /** Child component to display next to the input */\n    children: PropTypes.node\n};\n\nexport default TextInput;\n","examples":[{"name":"ExampleError","description":"Required TextBox with Error","code":"import React from 'react';\nimport TextInputStyledComponents from 'react-reuse/TextInputStyledComponents';\n\n/** Required TextBox with Error */\nclass ExampleError extends React.Component {\n    render() {\n        return (\n            <TextInputStyledComponents\n                htmlId=\"example-error\"\n                label=\"First Name\"\n                name=\"firstname\"\n                onChange={() => alert('Changed!')}\n                error=\"First name is required\"\n                required\n            />\n        );\n    }\n};\n\nexport default ExampleError;\n"}]}]