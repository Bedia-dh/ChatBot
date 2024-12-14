const questionAnswerPairs = [
    { question: "How can I report a pothole or broken streetlight in my area?", answer: "You can report issues like this through our municipal hotline or online reporting portal." },
    { question: "What is the process for requesting garbage collection services?", answer: "The process typically involves submitting an application online or visiting the municipal office." },
    { question: "What are the steps to apply for a business license?", answer: "The process typically involves submitting an application online or visiting the municipal office." },
    { question: "How do I obtain a construction permit?", answer: "Here’s how you can proceed: visit the municipal office or use our online resources for assistance." },
    { question: "Where can I find the latest municipal budget report?", answer: "You can find this information on the official municipal website or by contacting the relevant department." },
    { question: "How are local taxes allocated in our community?", answer: "Local taxes are allocated to various services such as education, healthcare, public safety, road maintenance, sanitation, parks, and community development projects. You can find more details in the municipality's annual budget report, available online or at the local government office." }, ,
    { question: "What are the recent performance evaluation results for our municipality?", answer: "The recent performance evaluation results, covering areas like service delivery and citizen satisfaction, are published in the municipality’s annual performance report. You can access the report online or request it from the local government office." },
    { question: "How does our municipality rank in terms of service delivery?", answer: "Our municipality's ranking in service delivery is based on efficiency, public satisfaction, and project completion rates. For the most current rankings, check the municipality’s website or the performance review report available at the local government office." },
    { question: "When is the next municipal council meeting?", answer: "The next municipal council meeting is scheduled for [insert date]. For an updated schedule, please visit our official website or contact the municipal clerk’s office." },
    { question: "How can I participate in public consultations?", answer: "You can participate in public consultations by attending community forums or meetings announced on the municipality’s website. Some consultations may also allow online participation. Stay updated by subscribing to our notifications or checking the website." },
    { question: " How do I file a complaint about a municipal service?", answer: "You can file a complaint through our website using the online complaint form, by calling our municipal complaint hotline, or by visiting the municipal office to submit a written complaint. Please include the service issue and your contact details." },
    { question: "Where can I submit suggestions for community improvement?", answer: "Suggestions can be submitted through the 'Suggestions' section on our website, during public meetings, or by visiting the municipal office. You can also leave them in suggestion boxes at municipal facilities." },
    { question: " What are the regulations regarding noise levels in residential areas?", answer: "Noise regulations include limits on loud sounds, particularly during the night, typically from 10:00 PM to 7:00 AM. Specific rules may apply to construction work, loud music, or disturbances. You can view the full Noise Control Ordinance on our website or at the municipal office." },
    { question: "Where can I access the Local Government Code?", answer: "The Local Government Code is available on our official website, in the municipal library, or through the records office. You can also access it through online portals providing public legal documents." },
    { question: "What is the procedure for correcting errors in my civil status records?", answer: "To correct errors in your civil status records, visit the local civil registrar's office, submit a petition for correction, and provide supporting documents. The office will guide you through the process and inform you of the timeline for correction." },
    { question: "How do I change my name on official documents?", answer: "To change your name on official documents, you need to file a petition at the local civil registrar's office. You'll be required to provide a valid reason for the name change, such as marriage or legal name correction, along with supporting documents. The office will guide you through the process and inform you about any required fees." },
    { question: "How can I access open data provided by the Ministry of Interior?", answer: "You can access open data provided by the Ministry of Interior through their official website. They often provide data sets related to governance, public services, and community development. To explore available data, visit the 'Open Data' or 'Public Data' section on the Ministry's portal." },
    { question: " What datasets are available for public use?", answer: "The available datasets for public use typically cover areas such as local government performance, demographic statistics, infrastructure projects, health data, education data, and more. You can find a list of these datasets on the municipality’s or Ministry of Interior's official open data platform." },
    { question: " What are the terms of use for the open data provided?", answer: "The terms of use for open data typically include guidelines on how the data can be used, shared, and attributed. Generally, data must be used for non-commercial purposes, and proper credit should be given when shared or published. For full details, refer to the 'Terms of Use' section on the open data portal of the Ministry of Interior or local government website." },
    { question: "How can I utilize open data for research purposes?", answer: "To utilize open data for research, first, explore available datasets through the open data portals provided by the Ministry of Interior or local government. Ensure that you comply with the terms of use and properly attribute the data. You can use the data for analysis, reports, and publications, and even collaborate with public institutions for research projects." },
    { question: "What is the contact number for emergency services?", answer: "The emergency services contact number is [insert emergency number, e.g., '911']. This number connects you to local police, fire, and medical services. It’s important to save this number in case of urgent situations." },
    { question: "How do I report a public safety issue?", answer: "To report a public safety issue, you can contact local authorities via the emergency services number [insert number] or use the municipal website's reporting tools. You can also visit the local police or fire department office in person to file a report." },
    { question: "What are the evacuation routes in case of a natural disaster?", answer: "Evacuation routes are pre-designated pathways that lead to safety in the event of natural disasters. You can find detailed evacuation maps on the municipal website, or you can contact local emergency management services for information on the nearest evacuation routes in your area." },
    { question: " Where can I find information on emergency shelters?", answer: "Information on emergency shelters can be found on the municipal website, which lists the locations of shelters available during natural disasters. You can also inquire with local authorities or emergency services for guidance on the nearest shelter to your location." },
    { question: " What documents do I need to apply for a passport?", answer: "To apply for a passport, you generally need:<ul><li>A valid government-issued ID (e.g., national ID card or driver’s license)<li>Birth certificate or proof of citizenship</li><li>Passport-sized photos (meeting specific guidelines)</li><li>Application form (available online or at the passport office)</li><li>Payment for processing feesYou can visit the official passport office or their website for the complete list of requirements and application instructions.</li></ul>" }
    ,
    { question: "What is the process for renewing an expired passport?", answer: "To renew an expired passport, you need to visit the passport office or apply online through the official government portal. You will need to submit your expired passport, passport-sized photos, proof of citizenship, and pay the renewal fee. In some cases, you may need to provide additional documents if there have been significant changes since your last passport was issued."}
    ,
    { question: " How do I apply for a new national ID card?", answer: "To apply for a new national ID card, you must visit the local registry office or apply online (if available). You will need to provide your birth certificate, proof of residence, and other personal identification documents. Once your application is processed, you will be notified when your ID is ready for collection." }
    ,
    { question: " What documents are required for a replacement ID card?", answer: "To replace a lost or stolen national ID card, you will typically need:A police report (if the ID was stolen)Proof of identity (such as a birth certificate or previous ID)Passport-sized photos (if required)Completed application formYou can submit these documents at the local registry office or through the online application system." }
    ,
    { question: "How can I obtain a copy of my birth certificate?", answer: "You can obtain a copy of your birth certificate by visiting the local civil registry office or by requesting it online if the service is available. You will need to provide personal information such as your full name, date of birth, and the names of your parents. A small fee may be required for the processing of the certificate." }
    ,
    { question: "What is the procedure for correcting errors in my civil status records?", answer: "To correct errors in your civil status records, you need to submit a petition to the civil registrar's office. You will need to provide supporting documents that verify the correct information, such as an affidavit or court order. The office will review your petition and make the necessary amendments in the records." } ,
    { question: "Where is the nearest healthcare facility or hospital?", answer: "The nearest healthcare facility or hospital can be found by checking the municipal website or contacting the local health department. You can also use online maps or ask for assistance from emergency services if immediate help is needed."}
    ,
    { question: "How can I apply for social assistance programs?", answer: "To apply for social assistance programs, you need to visit the local welfare office or apply online through the official government website. You may be required to provide proof of income, residency, and other personal documents to determine eligibility for the programs." }
    ,
    { question: "What are the COVID-19 regulations or vaccination locations in my area?", answer: "COVID-19 regulations, including vaccination locations and guidelines, are regularly updated on the municipal website or health department’s portal. You can also find vaccination centers listed by the Ministry of Health, which may include local clinics and hospitals offering vaccines. Please refer to these resources for the most accurate and current information." }
    ,
    { question: "Where can I find mental health or counseling services?", answer: "Mental health and counseling services are available through local health clinics, hospitals, and specialized mental health centers. You can also inquire at the municipality’s health department or visit the official website for a list of licensed professionals and support groups in your area." }
    ,
    { question: " What are the school enrollment procedures?", answer: "To enroll your child in school, you need to visit the school district or the specific school where you wish to enroll. You will typically need to provide proof of residence, the child’s birth certificate, vaccination records, and previous school records (if applicable). Some schools may also offer online enrollment options." }
    ,
    { question: " How can I find scholarship opportunities?", answer: "Scholarship opportunities can be found through local schools, universities, and government websites. Many educational institutions offer scholarship programs, and you can also check nonprofit organizations or private sector scholarships. Additionally, the local municipality may have scholarship listings on their education portal." }
    ,
    { question: " What youth programs or summer camps are available in my municipality?", answer: "Youth programs and summer camps are typically organized by local community centers, schools, or municipal youth offices. You can find information about these programs on the municipality's website or by contacting the local recreation department. They may offer a variety of activities such as sports, arts, and educational camps." }
    ,
    { question: "Where can I access adult education or vocational training?", answer: "Adult education and vocational training programs are available at local community colleges, vocational schools, or through online platforms. You can contact the municipal education department or visit their website for information about available courses, certifications, and training programs for skill development." }
    ,
    { question: "What is the contact information for local police or fire departments?", answer: "The contact information for local police and fire departments can be found on the municipal website or by calling the emergency services number. You can also visit their respective local stations for in-person inquiries. Here’s the emergency contact number: [insert emergency number]." }
    ,
    { question: "How do I report a public safety concern?", answer: "To report a public safety concern, you can contact the local police or fire department via the emergency services number [insert number]. Additionally, you may be able to report concerns through the municipal website or directly at your local police station." },
    { question: "Where can I find evacuation routes during a natural disaster?", answer: "Evacuation routes are typically posted on the municipal website or through local emergency services. You can also find evacuation maps at community centers, hospitals, and other public buildings. Be sure to stay informed through local media or official alerts in case of a natural disaster." },
    { question: " How can I get alerts for emergencies like floods or earthquakes?", answer: "Emergency alerts for natural disasters such as floods or earthquakes can be received through local government notification systems, mobile apps, or by subscribing to emergency alert services. You can also check the municipality’s website for links to relevant alert systems and sign-up forms." },
    { question: "How do I get a public transport pass?", answer: "Public transport passes can typically be obtained at local transportation offices or online through the municipality's public transport website. You may need to provide proof of residency, a photo, and payment for the pass. There are also often discounted rates for students, seniors, and low-income residents" }
    ,
    { question: "What is the bus schedule for my area?", answer: "The bus schedule for your area can be found on the municipal transportation website or by visiting the nearest bus station. You can also download the public transport app (if available) to view real-time schedules and route information." }
    ,
    { question: "How do I report damaged roads or blocked pathways?", answer: "To report damaged roads or blocked pathways, you can contact the local municipal office or use the 'Report an Issue' section on the municipal website. Some areas also have mobile apps for reporting these types of concerns. You can also call the local public works department to ensure the issue is addressed." }
    ,
    { question: " Where can I find information about road construction projects?", answer: "Information about ongoing and upcoming road construction projects can be found on the municipal website or by contacting the local public works department. You can also check local news outlets or community boards for updates on construction projects in your area." }
    ,
    { question: " How can I report illegal dumping or environmental violations?", answer:"To report illegal dumping or environmental violations, you can contact the local environmental protection office, use the 'Report an Issue' feature on the municipality's website, or call the waste management department. If it is an urgent or hazardous violation, notify local authorities immediately." }
    ,
    { question: " What are the recycling guidelines in my municipality?", answer:"Recycling guidelines vary by municipality, and you can find specific information on the local waste management website. Typically, recyclable materials include paper, glass, plastic, and metal. The municipality may provide details on pickup schedules, sorting requirements, and drop-off locations." }
    ,
    { question: "Where can I find information about tree-planting initiatives?", answer:"Information about tree-planting initiatives can be found through the local environmental or parks department. You can also check the municipality's website for upcoming tree-planting events or volunteer opportunities. Some cities also partner with local environmental organizations to promote tree planting." }
    ,
    { question: "How do I join a community clean-up program?", answer:"To join a community clean-up program, you can contact your local community center, environmental group, or visit the municipality’s website for details. These programs may have scheduled clean-up days or offer volunteer sign-ups for ongoing initiatives." }
    ,
    { question: "How do I pay my municipal taxes online?", answer:"To pay municipal taxes online, visit the local government website and access the 'Pay Taxes' section. You will need to create an account or log in to your existing account, enter your tax details, and complete the payment using a credit card, debit card, or bank transfer."}
    ,
    { question: "What are the deadlines for property tax payments?", answer:"The deadlines for property tax payments vary by municipality, but they are generally announced on the local government's website at the start of the tax year. You can also contact the local tax office for specific dates and any late payment penalties."}
    ,
    { question: "How can I get a receipt for my tax payment?", answer:"After making a payment, you can request a receipt through the municipal tax payment portal. You will typically have the option to download or print the receipt immediately. If you paid in person or by mail, the receipt will be issued at the time of payment"}
    ,
    { question: "What happens if I miss a payment deadline?", answer:"If you miss a property tax payment deadline, you may incur late fees, penalties, or interest charges. In some cases, missed payments could result in further action by the municipality, such as a lien or seizure of property. It’s best to contact the tax office to discuss payment options if you miss a deadline."}
    ,
    { question: "What are the steps to start a business in my municipality?", answer:"To start a business in your municipality, you will need to:Register your business with the local business registration office.Obtain the necessary licenses and permits.If applicable, apply for tax registration.Meet any zoning or land-use regulations.Ensure you comply with health, safety, and environmental standards.You can find more details and forms on the municipality’s website or contact the local chamber of commerce for guidance."}
    ,
    { question: "How can I find information about local markets or trade fairs?", answer:"Information about local markets and trade fairs can typically be found on the municipality's website or by contacting the local chamber of commerce. You can also check community centers or bulletin boards for event schedules, registration details, and venue information."}
    ,
    { question: " What grants or loans are available for small businesses?", answer:"Grants and loans for small businesses can be accessed through local government programs, business development agencies, or financial institutions. You can check the municipality's economic development page for information on available funding opportunities, eligibility criteria, and application procedures."}
    ,
    { question: "Where can I find support for entrepreneurship training?", answer:"Entrepreneurship training programs are often available through local universities, business incubators, and government-sponsored programs. You can check with the municipality's economic development office or visit websites for local business accelerators to find courses and resources designed to support entrepreneurs."}
    ,
    { question: "What cultural events or festivals are happening this month?", answer:"Cultural events and festivals happening this month can be found on the municipality's event calendar, which is typically posted on the local government website. You can also visit cultural centers, local tourism boards, or social media pages for details on upcoming events and activities."}
    ,
    { question: "How can I book a sports facility or community hall?", answer:"To book a sports facility or community hall, you can contact the local recreation department or visit the municipality's website for booking instructions. Many facilities have online booking systems where you can check availability and make reservations. You may need to provide additional information, such as the event date and size."}
    ,
    { question: " Are there any local art exhibitions or workshops?", answer:"Local art exhibitions and workshops can be found at art galleries, community centers, or cultural institutions in your area. You can visit the municipality’s cultural affairs website or contact local art organizations for information about upcoming exhibitions, workshops, and artist talks."}    ,
    { question: " What tourist attractions are available in my area?", answer:"Tourist attractions in your area can be found on the local tourism website or by visiting visitor centers. Local landmarks, museums, parks, and cultural sites are often listed, along with maps and details on visiting hours, tours, and special events."}
    ,
    { question: "What are my rights when interacting with municipal authorities?", answer:"When interacting with municipal authorities, you have the right to fair treatment, access to public information, and the ability to voice concerns or file complaints. These rights are generally outlined in the municipality's citizen charter or legal framework. You can also contact the local ombudsman if you feel your rights are being violated."}
    ,
    { question: "How do I file an appeal against a municipal decision?", answer:"To file an appeal against a municipal decision, you typically need to submit a formal written request to the municipality's appeals office or relevant department. You may need to provide supporting documentation and state the reasons for your appeal. Check the municipal website for specific guidelines and forms for the appeal process."}
    ,
    { question: " What are the steps to register to vote?", answer:"To register to vote, you must meet the eligibility requirements, which include being a citizen and a resident of the municipality. You can register online through the municipal website or visit a local election office. You'll need to provide identification and proof of residency. Once registered, you will receive information on voting dates and locations."}
    ,    { question: "Where can I find legal aid services?", answer:"Legal aid services are available through local government programs, non-profit organizations, and law firms that offer pro bono services. You can visit the municipality's website for information on local legal aid resources or contact a community legal center to get assistance with legal matters."}
    ,    { question: " How do I reset my account password for this portal?", answer:"To reset your account password, click on the 'Forgot Password' link on the login page. You will be prompted to enter your email address or username. A password reset link will be sent to your email, allowing you to create a new password. If you encounter issues, contact customer support for assistance."}    ,    { question: " What should I do if the website is not working properly?", answer:"If the website is not working properly, first try refreshing the page or clearing your browser's cache and cookies. If the problem persists, check if the site is undergoing maintenance or report the issue to the website's support team. You can also contact the IT department for more help."}
    ,    { question: " Where can I find a user guide for this portal?", answer:"A user guide for this portal can usually be found in the 'Help' or 'Support' section of the website. Look for a link to 'User Guide' or 'FAQs' where detailed instructions are provided. If you still need assistance, you can reach out to customer support for further guidance."

}    ,    { question: "How do I update my profile information on this site?", answer:"To update your profile information, log into your account and navigate to the 'Account Settings' or 'Profile' section. Here, you can edit your personal details, such as contact information, preferences, and password. Be sure to save any changes after updating your information."

}  ,    { question: "How can I submit feedback about municipal services?", answer:"Feedback about municipal services can be submitted through the municipality's online portal, contact forms, or by emailing the appropriate department. Many municipalities also provide feedback surveys or suggestion boxes where you can share your thoughts and suggestions for improvement."

},    { question: "What is the process for suggesting a new community project?", answer:"To suggest a new community project, visit the municipality's website and check for the 'Community Projects' or 'Get Involved' section. There, you can submit your idea through a form or email. You may also be able to attend local council meetings to present your suggestion in person."
},    { question: " Where can I rate my experience with the chatbot or portal?", answer:"To rate your experience with the chatbot or portal, look for a feedback or rating option at the end of your interaction. This may appear as a survey or a star-rating system. Alternatively, you can submit your feedback through the 'Contact Us' section of the portal."
},    { question: " How do I report an error or incorrect information on this site?", answer:"To report an error or incorrect information on the site, visit the 'Contact Us' or 'Support' section and submit a report via a form or email. Include details about the error, such as the page or content, and any relevant screenshots if possible."
},    { question: "What programs are available for senior citizens?", answer:"Programs available for senior citizens may include health services, transportation assistance, social events, and discounts on municipal services. You can find more information by visiting the senior services section on the municipality's website or by contacting the local senior center for details on programs in your area."
},    { question: " How can I apply for a senior citizen discount on municipal services?", answer:"To apply for a senior citizen discount on municipal services, you will typically need to provide proof of age and residency. You can apply online via the municipality's website or visit the local service office. Check the 'Senior Citizens' section for more details on eligibility and the application process."
},    { question: " Where can I find elderly care facilities?", answer:"Elderly care facilities can be found by searching the municipality's website or contacting local healthcare services. You can also consult community organizations or senior centers for a list of available facilities, such as nursing homes, assisted living, and daycare services for seniors."
},    { question: "What support is available for retired professionals?", answer:"Retired professionals can access support programs such as pension counseling, social services, and networking opportunities. Local government or non-profit organizations often provide resources for financial management, healthcare, and social activities. Contact your municipality’s senior services department for more details."
},    { question: "What services are available for women's health and safety?", answer:"Women's health and safety services may include healthcare centers offering reproductive health services, domestic violence support, mental health resources, and safety programs. Contact your local health department or women's support organizations for more information on available services and resources."
},    { question: "How can I report domestic violence or abuse?", answer:"Domestic violence or abuse can be reported through emergency services by dialing 911, or you can reach out to local shelters, police, or confidential hotlines. Many municipalities also have dedicated support services for victims, such as legal aid, counseling, and emergency housing."


},    { question: "Are there any entrepreneurship programs for women?", answer:"Yes, many municipalities offer entrepreneurship programs specifically for women, which may include mentorship, training, funding opportunities, and networking events. Check the local business development agency or women’s resource center for more details on available programs and support."
},    { question: "Where can I find childcare support or maternity leave information?", answer:"Childcare support and maternity leave information can be found through the municipality's social services department or the national labor office. Local community centers or child care providers may also offer assistance and guidance on available programs and support options."
},    { question: "What services are available for people with disabilities?", answer:"Services for people with disabilities may include accessible public transportation, home care services, assistive technologies, and social programs. Contact the local disability services office or health department for a full list of available services, including educational and employment support."
},    { question: "How can I request an accessibility audit for a public facility?", answer:"To request an accessibility audit for a public facility, contact the municipality’s office responsible for public services or accessibility. They can schedule an audit to assess compliance with accessibility standards and provide recommendations for improvement."
},    { question: " Are there sign language interpreters available for public events?", answer:"Sign language interpreters may be available for public events upon request. You can contact the event organizers or the municipality’s accessibility office to arrange for an interpreter. Many cities provide interpreter services for public meetings, conferences, and cultural events."
},    { question: "What assistive technologies does the municipality provide?", answer:"The municipality may provide assistive technologies such as screen readers, hearing aids, voice recognition software, and other devices to help individuals with disabilities. Contact the local disability services or accessibility office for more information on available assistive technologies."
},    { question: " What should I do when moving to a new municipality?", answer:"When moving to a new municipality, you should update your address with the local government, register for local services such as utilities and healthcare, and learn about the community’s regulations. You may also need to transfer your vehicle registration, update your voter registration, and familiarize yourself with local programs."
},    { question: "How can I set up utilities in my new home?", answer:"To set up utilities in your new home, contact the local utility providers (water, electricity, gas, internet) to establish an account. You can typically do this online or by visiting the service provider's office. Some municipalities also provide utility setup assistance for new residents."
},    { question: "Where can I find a map of local services and facilities?", answer:"Maps of local services and facilities are often available on the municipality’s website. You can access maps of key locations such as public transportation routes, healthcare facilities, schools, parks, and community centers. Additionally, you can find printed maps at the local visitor center or town hall."
},    { question: " What are the residency requirements for enrolling my child in school?", answer:"Residency requirements for enrolling your child in school typically include proof of local address and age. Check the local school district’s website or contact the school enrollment office for specific guidelines and the required documentation needed for enrollment."
},    { question: " How do I volunteer for community service?", answer:"To volunteer for community service, visit the municipality's volunteer programs page or contact local non-profit organizations, schools, or community centers. They often provide opportunities for volunteering in various fields such as environmental cleanups, events, and community outreach."
},    { question: "What is the history of our municipality?", answer:"The history of your municipality can often be found in the local history section of the municipal website, public libraries, or history museums. You can also learn more through local heritage societies and historical walking tours."
},    { question: " Where can I find fun activities for kids?", answer:"Fun activities for kids can be found at local parks, community centers, and recreational facilities. You can check the municipality’s events calendar, contact the parks and recreation department, or visit websites offering information on local kids' programs, summer camps, and special events."
},    { question: " How can I learn about the local government structure?", answer:"Information about the local government structure can typically be found on the municipality’s official website. This includes details about elected officials, departments, and how local governance operates. You can also attend municipal council meetings or request information directly from the local government office."
}
];

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chat = document.getElementById("chat");

  
    const userMessage = document.createElement("div");
    userMessage.classList.add("user");
    userMessage.textContent = userInput;
    chat.appendChild(userMessage);

  
    const response = questionAnswerPairs.find(pair =>
        userInput.toLowerCase().includes(pair.question.toLowerCase())
    );

  
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot");
    botMessage.textContent = response ? response.answer : "I'm sorry, I don't understand that question.";
    chat.appendChild(botMessage);

    
    document.getElementById("userInput").value = "";

   
    chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (!userInput) return;

    const chat = document.getElementById("chat");

   
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerHTML = `<p>${userInput}</p><span class="timestamp">${getCurrentTime()}</span>`;
    chat.appendChild(userMessage);
    const response = questionAnswerPairs.find(pair =>
        userInput.toLowerCase().includes(pair.question.toLowerCase())
    );
   
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot");
        botMessage.innerHTML = response ? response.answer : `<p>I'm not sure how to help with that yet, but I'm learning!</p><span class="timestamp">${getCurrentTime()}</span>`;
        chat.appendChild(botMessage);

        chat.scrollTop = chat.scrollHeight;
    }, 500);

    document.getElementById("userInput").value = "";
    chat.scrollTop = chat.scrollHeight;
}


function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}${ampm}`;
}
