const express = require('express');
const httpShutdown = require('http-shutdown');

const config = require('./config');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/items', (req, res) => {
    const items = [
        {
            id: 1,
            name: "Mountain Dew",
            qty: 2,
            costPerUnit: 1.8
        },
        {
            id: 2,
            name: "Desperados",
            qty: 6,
            costPerUnit: 2.5833
        },
        {
            id: 3,
            name: "Jack Daniels",
            qty: 4,
            costPerUnit: 3.35
        }
    ];

    res.json(items);
});


app.get('/randoms', (req, res) => {
    const values = [];

    for (let counter = 0; counter < 4; counter++) {
        values.push(Math.random());
    }

    res.json(values);
});

app.get('/vsts', (req, res) => {
    const data = {"count":1,"value":[{"id":48306,"rev":18,"fields":{"System.AreaPath":"Digital\\Starship","System.TeamProject":"Digital","System.IterationPath":"Digital\\Digital X\\PI 11\\11.1","System.WorkItemType":"User Story","System.State":"Active","System.Reason":"Implementation started","System.AssignedTo":"Tim Clifford <tim.clifford@vodafone.com>","System.CreatedDate":"2018-09-27T08:49:21.807Z","System.CreatedBy":"Lee Wilson <lee.wilson3@vodafone.com>","System.ChangedDate":"2018-10-02T12:56:04.43Z","System.ChangedBy":"Tim Clifford <tim.clifford@vodafone.com>","System.CommentCount":3,"System.Title":"FE - Investigate integration with Gherkin","System.BoardColumn":"Active","System.BoardColumnDone":false,"Microsoft.VSTS.Scheduling.StoryPoints":5.0,"Microsoft.VSTS.Common.ActivatedBy":"Tim Clifford <tim.clifford@vodafone.com>","Microsoft.VSTS.Common.ActivatedDate":"2018-10-01T13:32:30.11Z","Microsoft.VSTS.Common.StateChangeDate":"2018-10-01T13:32:30.11Z","Microsoft.VSTS.Common.Priority":4,"Microsoft.VSTS.Common.StackRank":799816164.0,"Microsoft.VSTS.Common.ValueArea":"Business","WEF_C7B24F9156684E93A3CC399B880D68E3_Kanban.Column":"Active","WEF_C7B24F9156684E93A3CC399B880D68E3_Kanban.Column.Done":false,"WEF_D938062408DE46C8B6343E9634FD6627_Kanban.Column":"New","WEF_D938062408DE46C8B6343E9634FD6627_Kanban.Column.Done":false,"VFDigitalAgile.UATRequired":false,"VFDigitalAgile.PATTested":false,"VFDigitalAgile.SITTested":false,"VFDigitalAgile.ProductOnline":false,"VFDigitalAgile.PENTested":false,"VFDigitalAgile.AreaofValue":"Business","WEF_2F0A8775CDB6464FBEC393CA052D27F8_Kanban.Column":"Active","WEF_2F0A8775CDB6464FBEC393CA052D27F8_Kanban.Column.Done":false,"WEF_8D432276027B49EBB0459AC5C7CF4BC7_Kanban.Column":"New","WEF_8D432276027B49EBB0459AC5C7CF4BC7_Kanban.Column.Done":false,"System.Description":"<p>As a developer, I am investigating automation testing using Gherkin and cucumber, to understand how I can help the team with living specifications and automated end to end tests.</p>","Microsoft.VSTS.Common.AcceptanceCriteria":"<pre style=\"background-color:#2b2b2b;color:#a9b7c6;font-family:'DejaVu Sans Mono';font-size:12.0pt;\"><span style=\"color:#bbb529;\">@48306<br></span><span style=\"color:#cc7832;font-weight:bold;\">Feature: </span>I need to find a way to make this work well for the team<br>  In order to add better documentation and even better automated testing<br>  As a developer with Cucumber experience<br>  I need to be able to demo how it can add value to the team's way of working<br><br>  Rules:<br>     1. I need to be able to go to a particular page and assert the new page's URL<br>     2. I need to be able to take a screenshot and check the file exists<br><br><br>  <span style=\"color:#cc7832;font-weight:bold;\">Background:<br></span><span style=\"color:#cc7832;font-weight:bold;\">    Given </span>I go to the &quot;<span style=\"color:#297bde;font-weight:bold;\">home</span>&quot; page<br><br><br>  <span style=\"color:#bbb529;\">@1 @navigation<br></span><span style=\"color:#bbb529;\">  </span><span style=\"color:#cc7832;font-weight:bold;\">Scenario: </span>Go to a particular page<br>    <span style=\"color:#cc7832;font-weight:bold;\">When </span>I go to the url &quot;<span style=\"color:#297bde;font-weight:bold;\">http://localhost:3000/foo</span>&quot;<br>    <span style=\"color:#cc7832;font-weight:bold;\">Then </span>I should be on the url &quot;<span style=\"color:#297bde;font-weight:bold;\">http://localhost:3000/foo</span>&quot;<br>    <span style=\"color:#cc7832;font-weight:bold;\">And </span>I should<span style=\"color:#297bde;font-weight:bold;\"> not</span> be on the url &quot;<span style=\"color:#297bde;font-weight:bold;\">http://localhost:3000/bar</span>&quot;<br>    <span style=\"color:#cc7832;font-weight:bold;\">And </span>I should<span style=\"color:#297bde;font-weight:bold;\"> not</span> be on the &quot;<span style=\"color:#297bde;font-weight:bold;\">home</span>&quot; page<br><br>  <span style=\"color:#bbb529;\">@2 @screenshots<br></span><span style=\"color:#bbb529;\">  </span><span style=\"color:#cc7832;font-weight:bold;\">Scenario: </span>Save screenshots and check that the files exist<br>    <span style=\"color:#cc7832;font-weight:bold;\">Then </span>I should be on the &quot;<span style=\"color:#297bde;font-weight:bold;\">home</span>&quot; page<br>    <span style=\"color:#cc7832;font-weight:bold;\">When </span>I take a screenshot<br>    <span style=\"color:#cc7832;font-weight:bold;\">And </span>I take a screenshot<span style=\"color:#297bde;font-weight:bold;\"> named &quot;screenshot2.png&quot;<br></span><span style=\"color:#297bde;font-weight:bold;\">    </span><span style=\"color:#cc7832;font-weight:bold;\">Then </span>the file &quot;<span style=\"color:#297bde;font-weight:bold;\">screenshot.png</span>&quot; should exist<br>    <span style=\"color:#cc7832;font-weight:bold;\">And </span>the file &quot;<span style=\"color:#297bde;font-weight:bold;\">screenshot2.png</span>&quot; should exist<br>    <span style=\"color:#cc7832;font-weight:bold;\">But </span>the file &quot;<span style=\"color:#297bde;font-weight:bold;\">does_not_exist.png</span>&quot; should<span style=\"color:#297bde;font-weight:bold;\"> not</span> exist<br></pre>"},"url":"https://dev.azure.com/vfuk-digital/_apis/wit/workItems/48306"}]};

    res.json(data);
});


const server = httpShutdown(app.listen(config.PORT));
server.host = `http://localhost:${config.PORT}`;

module.exports = server;
