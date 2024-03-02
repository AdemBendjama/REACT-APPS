import { useState } from "react"
import styles from './Form.module.css'
function Form(props) {

    const { onSubmit } = props


    const emptyData = { currentSavings: '', yearlyContribution: '', expectedReturn: '', duration: '' }
    const [formData, setFormData] = useState(emptyData)

    const submitHandler = (event) => {
        event.preventDefault()
        onSubmit(formData)
    }

    const changeHandler = (event) => {
        const { name, value } = event.target

        setFormData((prevData) => {
            return { ...prevData, [name]: value }
        })
    }

    const resetHandler = (event) => {
        event.preventDefault()
        setFormData(emptyData)
        onSubmit(emptyData)
    }

    return (
        <form className={styles.form} onSubmit={submitHandler} onReset={resetHandler}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings"
                        name="currentSavings"
                        value={formData.currentSavings}
                        onChange={changeHandler} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution"
                        name="yearlyContribution"
                        value={formData.yearlyContribution}
                        onChange={changeHandler} />
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return"
                        name="expectedReturn"
                        value={formData.expectedReturn}
                        onChange={changeHandler} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={changeHandler} />
                </p>
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default Form;