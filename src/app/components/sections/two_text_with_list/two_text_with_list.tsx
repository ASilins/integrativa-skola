import Card from "../../card/card";
import TwoTextMiddleComponent from "../../two_text_middle_component/TwoTextMiddleComponent";

export default function TwoTextWithList() {
    return (
        <section>
            <TwoTextMiddleComponent />
            <Card>
                List
            </Card>
        </section>
    )
}