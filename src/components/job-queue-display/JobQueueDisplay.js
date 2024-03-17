import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { localApi } from "../../utils";

export const JobQueueDisplay = () => {
  const [jobQueue, setJobQueue] = useState([]);
  const [jobHistory, setJobHistory] = useState([]);

  // Function to fetch job data
  const fetchJobData = async () => {
    try {
      const response = await localApi.get(
        "v1/generation/job-history?page=0&page_size=20",
      );
      setJobQueue(response.data.queue);
      setJobHistory(response.data.history);
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };

  // Fetch job data on component mount
  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <div>
      <Button color="success" variant="contained" onClick={fetchJobData}>
        Refresh
      </Button>
      <h2>Job Queue</h2>
      <ul>
        {jobQueue.map((job) => (
          <li key={job.job_id}>
            Job ID: {job.job_id} -{" "}
            {job.is_finished ? "Finished" : "In Progress"}
          </li>
        ))}
      </ul>
      <h2>Job History</h2>
      <ul>
        {jobHistory.map((job) => (
          <li key={job.job_id}>
            Job ID: {job.job_id} -{" "}
            {job.is_finished ? "Finished" : "In Progress"}
          </li>
        ))}
      </ul>
    </div>
  );
};

JobQueueDisplay.displayName = "JobQueueDisplay";
