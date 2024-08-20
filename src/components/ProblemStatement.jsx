import React from 'react';

const NewComponent = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col p-[2em]">
      <h1 className="text-[10rem] font-bold text-white">This is the New Component</h1>
      <div className="w-full border-[0.8px] border-[#A555EC] rounded-[1.5em] text-white font-nunito p-[1em] mt-[2em] justify-center items-center">
        <div>
          <div className='text-bold text-[2rem]'>
            <h1>Problem Statement for Hackathon: Building a Healthcare Chatbot Using Public Datasets</h1>
          </div>

          <h1>AI-Powered Healthcare Chatbot for Symptom Analysis, Disease Prediction, and Medical Imaging Insights</h1>
          <br />

          <p>
            <strong>Objective:</strong> Develop an AI-driven chatbot that leverages publicly available healthcare datasets to assist patients and healthcare professionals in symptom analysis, disease prediction, and medical imaging interpretation. The chatbot should provide users with actionable insights based on their symptoms, medical history, and relevant clinical or imaging data.
          </p>
          <br />
          <p>
            <strong>Problem Statment: </strong>Healthcare systems around the world are facing increasing pressure due to the growing number of patients, particularly those seeking timely diagnoses and treatments for various medical conditions. In underserved regions or busy urban areas, access to healthcare professionals can be limited, causing delays in diagnosis and treatment, which may result in worsening outcomes for patients.
          </p>

          <p>
            There is an urgent need for an intelligent and user-friendly digital tool that can assist in preliminary medical assessments, provide educational information, and offer data-driven recommendations. Your task is to design and build a conversational AI chatbot that can analyze symptoms, suggest potential diagnoses, and interpret medical imaging data to aid decision-making, all while ensuring patient privacy and data security.
          </p>

          <h1>Datasets to Use:</h1>

          <ul>
            <li>SEER: For cancer incidence and survival predictions.</li>
            <li>UK Biobank: For various health conditions and genetic correlations.</li>
          </ul>

          <p>Symptom-disease correlation data:</p>

          <ul>
            <li>UMLS: To map symptoms to diseases.</li>
            <li>SNOMED CT: To standardize medical terminology and enhance the chatbot's accuracy in identifying diseases from symptoms.</li>
          </ul>

          <p>Clinical data:</p>

          <ul>
            <li>MIMIC-III / MIMIC-IV: For providing insights into ICU patients, vital signs, and treatment outcomes.</li>
            <li>eICU Collaborative Research Database: For a deeper understanding of critical care and disease progression.</li>
          </ul>

          <p>Medical imaging data:</p>

          <ul>
            <li>TCIA: For cancer imaging data analysis.</li>
            <li>OpenI: For broader access to biomedical images linked to diseases.</li>
          </ul>

          <h1>Key Features to Implement:</h1>

          <p>
            Symptom Analysis & Disease Prediction: The chatbot should take user input regarding symptoms and medical history, cross-reference them with the UMLS and SNOMED CT datasets, and provide a list of potential diagnoses or recommendations for further medical consultation.
          </p>

          <p>
            Clinical Data Insights: Using the MIMIC-III/IV and eICU databases, the chatbot should provide deeper insights into disease progression, outcomes, and treatment effectiveness for various critical care scenarios.
          </p>

          <p>
            Medical Imaging Assistance: Incorporate TCIA and OpenI data to provide basic insights into medical imaging (e.g., radiology scans) that users upload, helping them understand what the images may indicate about their health.
          </p>

          <p>
            Personalized Recommendations: Utilize the UK Biobank to integrate insights based on genetic predispositions and health data, offering personalized health recommendations or early warnings for potential diseases.
          </p>

          <h1>Technical Requirements:</h1>

          <p>
            The chatbot should be built using NLP and machine learning models trained on the provided datasets.
          </p>

          <p>
            Ensure the chatbot can communicate clearly and efficiently, using simplified medical language for non-expert users and detailed technical responses for healthcare professionals.
          </p>

          <p>
            Implement data privacy measures and adhere to relevant regulations (e.g., HIPAA or GDPR).
          </p>

          <h1>Expected Outcomes:</h1>

          <p>
            Participants should develop a prototype of a chatbot capable of:
          </p>

          <ul>
            <li>Understanding and interpreting user symptoms.</li>
            <li>Cross-referencing symptoms with disease databases to suggest potential diagnoses.</li>
            <li>Analyzing user-submitted medical images for preliminary insights.</li>
            <li>Providing recommendations or next steps for seeking medical care.</li>
          </ul>

          <p>
            By the end of the hackathon, teams should have a working chatbot prototype that demonstrates its potential to assist patients and healthcare professionals, ultimately improving healthcare access and decision-making.
          </p>
          <h1>Bonus Challenge:</h1>

          <p>
            Incorporate a feedback loop where healthcare professionals can train the chatbot with real-world cases, improving its accuracy and effectiveness over time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewComponent;
