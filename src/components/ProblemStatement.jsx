import React from 'react';

const NewComponent = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col p-[2em]">
      <h1 className="text-[5rem] font-bold text-white pt-[50px] py-[10px]">Problem Statements</h1>
      <div className="w-full border-[0.8px] border-[#A555EC] rounded-[1.5em] text-white font-nunito p-[1em] mt-[2em] justify-center items-center">
        <div>
          <div>
            <p><strong>Problem Statement for Hackathon:</strong> Building a Healthcare Chatbot Using Public Datasets</p>
            <h1>AI-Powered Healthcare Chatbot for Symptom Analysis, Disease Prediction, and Medical Imaging Insights</h1>
            <br />

            <p>
              <strong>Objective:</strong> Develop an AI-driven chatbot that leverages publicly available healthcare datasets to assist patients and healthcare professionals in symptom analysis, disease prediction, and medical imaging interpretation. The chatbot should provide users with actionable insights based on their symptoms, medical history, and relevant clinical or imaging data.
            </p>
            <br />
            <p>
              <strong>Problem Statement:</strong> Healthcare systems around the world are facing increasing pressure due to the growing number of patients, particularly those seeking timely diagnoses and treatments for various medical conditions. In underserved regions or busy urban areas, access to healthcare professionals can be limited, causing delays in diagnosis and treatment, which may result in worsening outcomes for patients.
            </p>

            <p>
              <strong>There is an urgent need for an intelligent and user-friendly digital tool that can assist in preliminary medical assessments, provide educational information, and offer data-driven recommendations.</strong> Your task is to design and build a conversational AI chatbot that can analyze symptoms, suggest potential diagnoses, and interpret medical imaging data to aid decision-making, all while ensuring patient privacy and data security.
            </p>

            <p>
              <strong>Datasets to Use:</strong>
            </p>

            <ul>
              <li>SEER: For cancer incidence and survival predictions.</li>
              <li>UK Biobank: For various health conditions and genetic correlations.</li>
            </ul>

            <p>
              <strong>Symptom-disease correlation data:</strong>
            </p>

            <ul>
              <li>UMLS: To map symptoms to diseases.</li>
              <li>SNOMED CT: To standardize medical terminology and enhance the chatbot's accuracy in identifying diseases from symptoms.</li>
            </ul>

            <p>
              <strong>Clinical data:</strong>
            </p>

            <ul>
              <li>MIMIC-III / MIMIC-IV: For providing insights into ICU patients, vital signs, and treatment outcomes.</li>
              <li>eICU Collaborative Research Database: For a deeper understanding of critical care and disease progression.</li>
            </ul>

            <p>
              <strong>Medical imaging data:</strong>
            </p>

            <ul>
              <li>TCIA: For cancer imaging data analysis.</li>
              <li>OpenI: For broader access to biomedical images linked to diseases.</li>
            </ul>

            <p>
              <strong>Key Features to Implement:</strong>
            </p>

            <p>
              <strong>Symptom Analysis & Disease Prediction:</strong> The chatbot should take user input regarding symptoms and medical history, cross-reference them with the UMLS and SNOMED CT datasets, and provide a list of potential diagnoses or recommendations for further medical consultation.
            </p>

            <p>
              <strong>Clinical Data Insights:</strong> Using the MIMIC-III/IV and eICU databases, the chatbot should provide deeper insights into disease progression, outcomes, and treatment effectiveness for various critical care scenarios.
            </p>

            <p>
              <strong>Medical Imaging Assistance:</strong> Incorporate TCIA and OpenI data to provide basic insights into medical imaging (e.g., radiology scans) that users upload, helping them understand what the images may indicate about their health.
            </p>

            <p>
              <strong>Personalized Recommendations:</strong> Utilize the UK Biobank to integrate insights based on genetic predispositions and health data, offering personalized health recommendations or early warnings for potential diseases.
            </p>

            <p>
              <strong>Technical Requirements:</strong>
            </p>

            <p>
              <strong>The chatbot should be built using NLP and machine learning models trained on the provided datasets.</strong>
            </p>

            <p>
              <strong>Ensure the chatbot can communicate clearly and efficiently, using simplified medical language for non-expert users and detailed technical responses for healthcare professionals.</strong>
            </p>

            <p>
              <strong>Implement data privacy measures and adhere to relevant regulations (e.g., HIPAA or GDPR).</strong>
            </p>

            <p>
              <strong>Expected Outcomes:</strong>
            </p>

            <p>
              <strong>Participants should develop a prototype of a chatbot capable of:</strong>
            </p>

            <ul>
              <li>Understanding and interpreting user symptoms.</li>
              <li>Cross-referencing symptoms with medical datasets to predict potential diseases.</li>
              <li>Providing personalized health recommendations based on genetic predispositions and health data.</li>
              <li>Offering insights into medical imaging data uploaded by users.</li>
              <li>Ensuring data privacy and adhering to relevant regulations.</li>
            </ul>

            <p>
              <strong>Bonus Challenge:</strong>
            </p>

            <p>
              Incorporate a feedback loop where healthcare professionals can train the chatbot with real-world cases, improving its accuracy and effectiveness over time.
            </p>

            <p>
              <strong>Judging Criteria:</strong>
            </p>

            <ul>
              <li>Accuracy and effectiveness of the chatbot in symptom analysis and disease prediction.</li>
              <li>Quality and relevance of personalized health recommendations.</li>
              <li>Insights provided into medical imaging data.</li>
              <li>Data privacy and security measures implemented.</li>
              <li>User experience and interface design.</li>
            </ul>

            <p>
              <strong>Prizes:</strong>
            </p>

            <ul>
              <li>1st Place: $10,000</li>
              <li>2nd Place: $5,000</li>
              <li>3rd Place: $2,000</li>
            </ul>

            <p>
              <strong>Timeline:</strong>
            </p>

            <ul>
              <li>Registration Deadline: March 15, 2023</li>
              <li>Hackathon Period: March 16 - April 15, 2023</li>
              <li>Judging and Winner Announcement: April 16 - 30, 2023</li>
            </ul>

            <p>
              <strong>How to Participate:</strong>
            </p>

            <ol>
              <li>Register for the hackathon by March 15, 2023.</li>
              <li>Form a team of 2-5 members with diverse skill sets (e.g., NLP, machine learning, healthcare, UI/UX design).</li>
              <li>Develop your chatbot prototype using the provided datasets and technical requirements.</li>
              <li>Submit your project by April 15, 2023.</li>
            </ol>

            <p>
              <strong>Questions and Support:</strong>
            </p>

            <p>
              For any questions or concerns, please email <a href="mailto:support@healthcarechatbot.com">support@healthcarechatbot.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComponent;
