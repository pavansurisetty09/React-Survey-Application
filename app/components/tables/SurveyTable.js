import React from 'react';
import { Table } from 'reactstrap';
import { SurveyData } from './SurveyData';

function SurveyTable() {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>NAME</th>
          <th>TYPE</th>
          <th>DUE</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {SurveyData.map((survey, i) => (
          <tr key={i}>
            <th scope="row">{survey.name}</th>
            <td>{survey.type}</td>
            <td>{survey.due}</td>
            <td>{survey.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default SurveyTable;
