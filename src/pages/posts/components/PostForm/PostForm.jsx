import { useState } from "react";
import Typo from "../../../../components/Typo/Typo";
import Container from "../../../../components/Сontainer/Container";
import * as SC from './styles';

const DEFAULT_VALUES = { title: '', body: '' };

export default function PostForm(props) {
    const {
        title,
        onSubmitForm,
        defaultValues,
    } = props;

    const [formValues, setFormValues] = useState(defaultValues || DEFAULT_VALUES);

    const onChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        onSubmitForm(formValues);

        !defaultValues && setFormValues(DEFAULT_VALUES);
    };

    const disabled = !formValues.title.trim() || !formValues.body.trim();

    return (
        <Container>
            <Typo>{title}</Typo>
            <SC.Form onSubmit={onSubmit}>
                <SC.Field>
                    <SC.Input
                        type="text"
                        placeholder="Заголовок"
                        name="title"
                        value={formValues.title}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </SC.Field>
                <SC.Field>
                    <SC.Textarea
                        placeholder="Текст"
                        name="body"
                        rows={10}
                        cols={30}
                        value={formValues.body}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </SC.Field>
                <SC.Button type="submit" disabled={disabled}>Сохранить</SC.Button>
            </SC.Form>
        </Container>
    )
};