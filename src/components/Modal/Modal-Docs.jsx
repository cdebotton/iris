import React from 'react';
import Modal from './Modal';
import Button from '../Button/Button';
import InputText from '../InputText/InputText';
import { GridBlock, GridCol, Grid } from '../Grid/Grid';
import { ParagraphMd, Header1, Header2, Header3 } from '../../utility_components/Type/Type';
import styles from './Modal-Docs.scss';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

class ModalDocs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalOne: false,
            showModalTwo: false,
            showModalThree: false,
            showModalFour: false,
        };
        this.openModal1 = this.openModal1.bind(this);
        this.openModal2 = this.openModal2.bind(this);
        this.openModal3 = this.openModal3.bind(this);
        this.openModal4 = this.openModal4.bind(this);
        this.closeModal1 = this.closeModal1.bind(this);
        this.closeModal2 = this.closeModal2.bind(this);
        this.closeModal3 = this.closeModal3.bind(this);
        this.closeModal4 = this.closeModal4.bind(this);
    }

    closeModal1() {
        this.setState({ showModalOne: false });
    }

    openModal1() {
        this.setState({ showModalOne: true });
    }

    closeModal2() {
        this.setState({ showModalTwo: false });
    }

    openModal2() {
        this.setState({ showModalTwo: true });
    }

    closeModal3() {
        this.setState({ showModalThree: false });
    }

    openModal3() {
        this.setState({ showModalThree: true });
    }

    closeModal4() {
        this.setState({ showModalFour: false });
    }

    openModal4() {
        this.setState({ showModalFour: true });
    }

    render() {

        return (
            <div className="Pattern__docs">
                <div data-code />
                <Header3>Implementation Notes</Header3>
                <ul>
                    <li>The modal does not handle the logic behind opening or closing itself. The modal should be shown or hidden based on its <code>isShowing</code>.</li>
                    <li> <code>onDismiss</code> receives a function to call when any action that should close the modal is triggered</li>
                    <li>The modal needs a string passed to <code>modalLabelId</code> representing an id for an elment that labels the modal. If the <code>modalTitle</code> prop is used. This id will be applied to that element.</li>
                    <li>The <code>modalDescriptionId</code> prop should be a string representing the an element that desribes the modal's intention.</li>
                    <li><code>modalCloseLabel</code> should be a text string describing what clicking the close icon will do. For example, "Close this Dialog".</li>
                    <li><code>fullBleed</code> is a boolean for suppressing padding in the modal for. Passing <code>true</code> to it suppresses padding.</li>
                </ul>
                <Header3>Modal With Title Bar (Size: "sm")</Header3>
                <ParagraphMd>By passing a string to <code>modalTitle</code> a pre-formatted title bar will appear at the top of the modal. This is the standard modal dialog.</ParagraphMd>

                <Modal
                        modalLabelId="exampleModal2Label"
                        modalDescriptionId="exampleModal2Desc"
                        modalCloseLabel="Close this dialog."
                        modalTitle="Modal With Title Bar"
                        onDismiss={this.closeModal2}
                        isShowing = {this.state.showModalTwo}
                        size="sm"
                    >
                    <ParagraphMd id="exampleModal2Desc">I am a Small-sized Modal. Click these buttons to do stuff... or don't. It's up to you really.</ParagraphMd>
                    <Grid>
                            <GridBlock>
                                    <GridCol
                                            formColumn
                                        >
                                            <Button
                                            autoWidth="fluid"
                                            onClick={this.closeModal2}
                                            >
                                                Do it.
                                            </Button>
                                        </GridCol>
                                        <GridCol
                                            formColumn
                                        >
                                            <Button
                                            autoWidth="fluid"
                                            format="secondary"
                                            onClick={this.closeModal2}
                                            >
                                                Cancel
                                            </Button>
                                        </GridCol>
                                </GridBlock>
                            </Grid>
                    </Modal>

                    <Button format="primaryOutline"
                    onClick={this.openModal2}
                >
                    Show Modal
                </Button>

                    <ExampleSource>
                    {`
<Modal
    modalLabelId="exampleModal2Label"
    modalDescriptionId="exampleModal2Desc"
    modalCloseLabel="Close this dialog."
    modalTitle="Modal With Title Bar"
    onDismiss={this.closeModal2}
    isShowing = {this.state.showModalTwo}
>
    ... content here
</Modal>
                        `}
                    </ExampleSource>
                    <Header3>Free-form Modal, no dismiss button (Size: "md")</Header3>
                    <ParagraphMd>If there is a string passed to <code>modalTitle</code> The modal will print a pre-formatted title.</ParagraphMd>
                    <ParagraphMd>The dismiss button can be hidden with the <code>hideDismissButton</code> prop.</ParagraphMd>
                    <Modal
                        modalLabelId="exampleModalLabel"
                        modalDescriptionId="exampleModalDesc"
                        modalCloseLabel="Close this dialog."
                        onDismiss={this.closeModal1}
                        hideDismissButton
                        isShowing = {this.state.showModalOne}
                        size="md"
                    >
                        <Header2 className={styles.centeredHeadline} id="exampleModaLabel">Modal Title</Header2>
                        <ParagraphMd id="exampleModalDesc">This is what a log-in modal might look like.</ParagraphMd>

                        <InputText
                            name="modalFormEmailLogin"
                            id="modalFormUsername"
                            label="Email Address"
                        />

                        <InputText
                            name="modalFormPasswordLogin"
                            id="modalFormPasswordLogin"
                            label="Password"
                            type="password"
                        />

                        <Button
                            autoWidth="fluid"
                            format="primary"
                            onClick={this.closeModal1}
                        >
                            Log In
                        </Button>
                        <Button
                            autoWidth="fluid"
                            format="secondary"
                            onClick={this.closeModal1}
                        >
                            Cancel
                        </Button>

                    </Modal>
                    <Button
                        format="primaryOutline"
                        onClick={this.openModal1}
                    >
                        Show Modal
                    </Button>
                <ExampleSource>
                    {`
 <Modal
    modalLabelId="exampleModalLabel"
    modalDescriptionId="exampleModalDesc"
    modalCloseLabel="Close this dialog."
    onDismiss={this.closeModal1}
    isShowing = {this.state.showModalOne}
>
    ... content here
</Modal>
                        `}
                    </ExampleSource>
                    <Header3>Non Dismissible Modal (Size: "lg")</Header3>
                    <ParagraphMd>If we do not want the user to have access to the default closing controls, do not pass anything to the <code>onDismiss</code> prop. The modal will not print the close button and the background will not do anything on click.</ParagraphMd>
                    <Modal
                        fullBleed
                        modalLabelId="exampleNoCloseModalLabel"
                        modalDescriptionId="exampleModalDesc"
                        isShowing = {this.state.showModalThree}
                        size="lg"
                    >
                        <Header1 id = "exampleNoCloseModalLabel">I Will Not Be Dismissed or Padded!</Header1>
                        <ParagraphMd id="exampleModalDescNoClose">Sometimes we don't want modals to be dimissible</ParagraphMd>
                        <ParagraphMd>I also have no padding!</ParagraphMd>

                        <Button
                            autoWidth="fluid"
                            format="primary"
                            onClick={this.closeModal3}
                        >
                            I'll close the modal
                        </Button>
                    </Modal>
                    <Button
                        format="primaryOutline"
                        onClick={this.openModal3}
                    >
                        Show Modal
                    </Button>
                    <ExampleSource>
                    {`
  <Modal
    fullBleed
    modalLabelId="exampleNoCloseModalLabel"
    modalDescriptionId="exampleModalDesc"
    isShowing = {this.state.showModalThree}
>
    ... content here
</Modal>
                        `}
                    </ExampleSource>
                    <Header3>Modal with Light Dismiss Button (Size: "lg")</Header3>
                    <ParagraphMd>If your modal has an image at the top you can use the light dismiss button theme with <code>dismissButtonFormat='light'</code>.</ParagraphMd>
                    <Modal
                        fullBleed
                        dismissButtonFormat="light"
                        modalLabelId="exampleLightButtonModalLabel"
                        modalDescriptionId="exampleLightButtonDesc"
                        onDismiss={this.closeModal4}
                        isShowing = {this.state.showModalFour}
                        size="lg"
                    >
                         <div data-code style={{ 'backgroundImage': 'url(https://placekitten.com/1000/800)', 'backgroundSize': 'cover', 'backgroundPosition': 'center', 'height': '10rem', 'width': '100%' }} />
                        <Header1 id = "exampleLightButtonModalLabel">I am a large, full-bleed,light-dismiss button modal.</Header1>
                        <ParagraphMd id="exampleLightButtonDesc">I demonstrate the dismissButtonFormat option.</ParagraphMd>
                        <ParagraphMd>I also have no padding!</ParagraphMd>

                        <Button
                            autoWidth="fluid"
                            format="primary"
                            onClick={this.closeModal4}
                        >
                            I'll close the modal
                        </Button>
                    </Modal>
                    <Button
                        format="primaryOutline"
                        onClick={this.openModal4}
                    >
                        Show Modal
                    </Button>
                    <ExampleSource>
                    {`
<Modal
    fullBleed
    dismissButtonFormat="light"
    modalLabelId="exampleLightButtonModalLabel"
    modalDescriptionId="exampleLightButtonDesc"
    onDismiss={this.closeModal4}
    isShowing = {this.state.showModalFour}
    size="lg"
>
    ... content here
</Modal>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default ModalDocs;
