/* eslint-disable arrow-body-style */
import ExamContext from "context/context";
import Bill from "layouts/billing/components/Bill";

function ExamList() {
  return (
    <ExamContext.Consumer>
      {({ exams }) => {
        return exams.map((exam) => (
          <Bill
            nb={exam.id}
            titre={exam.titre}
            semestre={exam.semestre}
            date={exam.date}
            statut={exam.statut}
          />
        ));
      }}
    </ExamContext.Consumer>
  );
}
export default ExamList;
