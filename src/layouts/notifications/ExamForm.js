import {Button,TextField} from '@mui/material';
import {useFormik} from 'formik';

function ExamForm(props){
    //Au cas où on a une variable exam sinon on retourne vide
    const getExam = () =>{
        if(props.exam){
            return props.exam;
        }
        else{
            return {
                semester: 0,
                name: ''
            }
        }
    }
    //On appelle la fonction getExam on a l'exam en question
    const formHandler = useFormik({
        initialValues: getExam(),
        onSubmit: props.trigger
    });

    return (
    <>
        <form onSubmit={formHandler.handleSubmit}>
            <TextField
              id="semester"
              name="semester"
              label="semester"
              onChange={formHandler.handleChange}
              value={formHandler.values.semester}
            />
            <TextField
              id="name"
              name="name"
              label="name"
              onChange={formHandler.handleChange}
              value={formHandler.values.name}
            />
            <Button type="submit">{props.submitText ? props.submitText : "envoyer"}</Button>
        </form>
    </>
    );
}
export default ExamForm;