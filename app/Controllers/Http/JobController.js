'use strict'

const Job  = use('App/Models/Job')

class JobController {
    async home({view}) {

        // // Create a job
        // const job = new Job;
        // job.title = 'My job title';
        // job.link = 'http://google.com';
        // job.description = 'My job description';

        // await job.save();

        // Fetch a job
        const jobs = await Job.all();

        return view.render('index', { jobs: jobs.toJSON() })
    }
}

module.exports = JobController
