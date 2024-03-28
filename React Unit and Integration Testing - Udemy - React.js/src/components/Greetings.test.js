import { fireEvent, render, screen } from "@testing-library/react"
import Greetings from "./Greetings"

describe('Greetings Component', () => {

    test('should display Hello World', () => {
        // Arrange
        render(<Greetings />)

        // Act

        // Assert
        const element = screen.getByText('Hello World', { exact: false })
        expect(element).toBeInTheDocument()
    })

    test('should display It is good to see you when button is not clicked', () => {
        //
        render(<Greetings />)

        //
        const element = screen.getByText(/It is good to see you/i)
        expect(element).toBeInTheDocument()
    }
    )

    test('should display Changed when button is clicked', () => {
        //
        render(<Greetings />)

        //
        fireEvent.click(screen.getByText('Change Text', { exact: false }))

        //
        const element = screen.getByText(/Changed/i)
        expect(element).toBeInTheDocument()
    }
    )

}
)