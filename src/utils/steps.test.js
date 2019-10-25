import { dossierWorkflow, emptyWorkflow } from 'utils/steps';
import statuts from 'utils/statuts-mock';

function statutsWorkflow() {
  return emptyWorkflow().map(step =>
    statuts.find(statut => statut.id === step.id)
  );
}

test('compute workflow steps', () => {
  const depose = statuts.find(s => s.id === 'DEPOSE');
  let dossier0 = {
    statutActuel: depose,
    statuts: statuts.filter(s => s.id === 'DEPOSE'),
    statutsRestants: statutsWorkflow().filter(statut => statut.ordre >= 1)
  };
  console.log('dossier0=', JSON.stringify(dossier0));
  const incomplet = statuts.find(s => s.id === 'INCOMPLET');
  const h1 = statutsWorkflow().filter(s => s.ordre < 3);
  let statutsRestants = statutsWorkflow().filter(s => s.ordre >= 3);
  h1.push(incomplet);
  let dossier1 = {
    statutActuel: incomplet,
    statuts: [...h1],
    statutsRestants: statutsRestants
  };
  console.log('dossier1=', JSON.stringify(dossier1));
  const dossier0Workflow = dossierWorkflow(dossier0);
  console.log('dossierWorkflow(dossier0)=', JSON.stringify(dossier0Workflow));
  expect(dossier0Workflow.length).toBe(emptyWorkflow().length);
  const dossier1Workflow = dossierWorkflow(dossier1);
  console.log('dossierWorkflow(dossier1)=', JSON.stringify(dossier1Workflow));
  expect(dossier1Workflow.length).toBe(emptyWorkflow().length + 2);
  expect(dossier1Workflow.indexOf(incomplet)).toBe(3);

  const decision = statuts.find(s => s.id === 'DECISION');
  const h2 = statutsWorkflow().filter(s => s.ordre < 6);
  h1.push(decision);
  statutsRestants = statutsWorkflow().filter(s => s.ordre >= 6);
  let dossier2 = {
    statutActuel: decision,
    statuts: [...h2],
    statutsRestants: statutsRestants
  };
  console.log('dossier2=', JSON.stringify(dossier2));
  const dossier2Workflow = dossierWorkflow(dossier2);
  console.log('dossierWorkflow(dossier2)=', JSON.stringify(dossier2Workflow));
  expect(dossier2Workflow.length).toBe(emptyWorkflow().length);
});
