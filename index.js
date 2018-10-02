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
    const data = {"count":1,"value":[{"id":48306,"rev":17,"fields":{"System.AreaPath":"Digital\\Starship","System.TeamProject":"Digital","System.IterationPath":"Digital\\Digital X\\PI 11\\11.1","System.WorkItemType":"User Story","System.State":"Active","System.Reason":"Implementation started","System.AssignedTo":"Tim Clifford <tim.clifford@vodafone.com>","System.CreatedDate":"2018-09-27T08:49:21.807Z","System.CreatedBy":"Lee Wilson <lee.wilson3@vodafone.com>","System.ChangedDate":"2018-10-02T10:07:32.03Z","System.ChangedBy":"Tim Clifford <tim.clifford@vodafone.com>","System.CommentCount":3,"System.Title":"FE - Investigate integration with Gherkin","System.BoardColumn":"Active","System.BoardColumnDone":false,"Microsoft.VSTS.Scheduling.StoryPoints":5.0,"Microsoft.VSTS.Common.ActivatedBy":"Tim Clifford <tim.clifford@vodafone.com>","Microsoft.VSTS.Common.ActivatedDate":"2018-10-01T13:32:30.11Z","Microsoft.VSTS.Common.StateChangeDate":"2018-10-01T13:32:30.11Z","Microsoft.VSTS.Common.Priority":4,"Microsoft.VSTS.Common.StackRank":799816164.0,"Microsoft.VSTS.Common.ValueArea":"Business","WEF_C7B24F9156684E93A3CC399B880D68E3_Kanban.Column":"Active","WEF_C7B24F9156684E93A3CC399B880D68E3_Kanban.Column.Done":false,"WEF_D938062408DE46C8B6343E9634FD6627_Kanban.Column":"New","WEF_D938062408DE46C8B6343E9634FD6627_Kanban.Column.Done":false,"VFDigitalAgile.UATRequired":false,"VFDigitalAgile.PATTested":false,"VFDigitalAgile.SITTested":false,"VFDigitalAgile.ProductOnline":false,"VFDigitalAgile.PENTested":false,"VFDigitalAgile.AreaofValue":"Business","WEF_2F0A8775CDB6464FBEC393CA052D27F8_Kanban.Column":"Active","WEF_2F0A8775CDB6464FBEC393CA052D27F8_Kanban.Column.Done":false,"WEF_8D432276027B49EBB0459AC5C7CF4BC7_Kanban.Column":"New","WEF_8D432276027B49EBB0459AC5C7CF4BC7_Kanban.Column.Done":false,"System.Description":"<p>As a developer, I am investigating automation testing using Gherkin and cucumber, to understand how I can help the team with living specifications and automated end to end tests.</p>","System.History":"The demo went well. I'm just building in an investigation into automatically pulling acceptance test scenarios down from VSTS (Lee's idea), rather than having to manually copy them to the codebase. We want to run those tasks' scenarios as part of our definition of done, with a subset of critical paths to be run as ongoing regression e2e tests. I've already been able to manually tie in to the VSTS API to pull information for a given task, and I won't spend more than the rest of the day on this."},"url":"https://dev.azure.com/vfuk-digital/_apis/wit/workItems/48306"}]};

    res.json(data);
});


const server = httpShutdown(app.listen(config.PORT));
server.host = `http://localhost:${config.PORT}`;

module.exports = server;
