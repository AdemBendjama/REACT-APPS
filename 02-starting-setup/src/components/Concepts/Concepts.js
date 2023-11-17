import ConceptsItem from "./ConceptsItem";

function Concepts(props) {
    return (
        <ul id="concepts">
            {
                props.concepts.map((concept) => {
                    return (
                        <ConceptsItem concept={concept}></ConceptsItem>
                    )
                })
            }
        </ul>
    )
}

export default Concepts;