# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding data..."
Category.create([
    {
        name: "Technology",
        description: "Jobs related to Web Developer, Database Admin and Computer System Admin"
    },
    {
        name: "Medical",
        description: "Jobs related to Doctor, Nurse, Paramedic and Veterinarian"
    },
    {
        name: "Education",
        description: "Jobs related to College Professor, Technical Mentor and Instructional Coordinator"
    },
    {
        name: "Business",
        description: "Jobs related to Accountant, Human Resource Specialist and Market Research Analyst"
    },
    {
        name: "Aviation",
        description: "Jobs related to Airline Pilot, Flight Attendant and Federal Air Marshal"
    },
    {
        name: "Arts",
        description: "Jobs related to Actor, Director, Composer, Musician and Singer"
    }
])

User.create([
    {
        username: "Njihia413",
        first_name: "Maureen",
        last_name: "Njihia",
        email: "njihia413@gmail.com",
        password: "njihia413"
    },
    {
        username: "Johndoe123",
        first_name: "John",
        last_name: "Doe",
        email: "johndoe123@gmail.com",
        password: "johndoe123"
    },
    {
        username: "Enzo456",
        first_name: "Enzo",
        last_name: "Graziano",
        email: "enzograziano@gmail.com",
        password: "enzograziano456"
    }
])


Job.create([
    {
        company_name: "Aguirre and Rodgers Plc",
        company_phone: "+254717255460",
        company_website: "https://www.hiqu.us",
        company_linkedin: "https://www.xekela.mobi",
        company_logo: "A",
        company_location: "Mombasa",
        title: "Web Developer",
        category_id: 1,
        salary_range: "120000 - 300000",
        job_type: "Full Time",
        job_description: "<p>We are looking for an experienced Back-end and Front end developer to join our&nbsp;existing team. The developers will be responsible for the server side and the &lsquo;client-side&rsquo; of our web applications.&nbsp;If you have excellent programming skills and a passion for developing applications or improving existing ones, we would like to meet you. As a Back-end developer, you&rsquo;ll work closely with our engineers to ensure system consistency and improve user experience.</p> <p>As part of the team, you should be able to translate our company and customer needs into functional and appealing interactive applications. We expect you to be a tech-savvy professional, who is curious about new digital technologies and aspires to combine usability with visual design.</p> <p>&nbsp;</p> <p><strong>Responsibilities</strong></p> <ul> <li>Use markup languages to create user-friendly front ends in Javascript, HTML</li> <li>Maintain and improve existing Front end applications (Flutter, JS, React, React Native etc)</li> <li>Optimize applications for maximum speed</li> <li>Design mobile-based features</li> <li>Collaborate with back-end developers and web designers to improve usability</li> <li>Get feedback from, and build solutions for, users and customers</li> <li>Write functional requirement documents and guides</li> <li>Create quality mockups and prototypes</li> <li>Help back-end developers with coding and troubleshooting</li> <li>Ensure high quality graphic standards and brand consistency</li> <li>Collaborate with Front-end developers to integrate user-facing elements with server side logic</li> <li>Stay up-to-date on emerging technologies</li> </ul> <p><strong>Requirements</strong></p> <ul> <li>Proven working experience in Java &amp; JS development</li> <li>Hands on experience in designing and developing applications using Java EE platforms</li> <li>Object Oriented analysis and design using common design patterns.</li> <li>Profound insight of Java and JEE internals (Classloading, Memory Management, Transaction management etc)</li> <li>Excellent knowledge of Relational Databases, SQL and ORM technologies (JPA2, Hibernate)</li> <li>Experience in the Spring Framework</li> <li>Proven work experience as a Front-end developer</li> <li>Hands on experience with markup languages</li> <li>Experience with JavaScript, CSS and jQuery</li> <li>Familiarity with browser testing and debugging</li> <li>In-depth understanding of the entire web development process (design, development and deployment)</li> <li>Understanding of layout aesthetics</li> <li>Knowledge of SEO principles</li> <li>Familiarity with software like Adobe Suite, Photoshop and content management systems</li> <li>An ability to perform well in a fast-paced environment</li> <li>Excellent analytical and multitasking skills</li> </ul>",
        location: "Mombasa",
        application_deadline: "28-12-2022",
        experience: "3 years",
        qualification: "Bachelor's Degree",
        link_to_job: "https://www.jusoxoh.in",
        user_id: 1,
    },
    {
        company_name: "Match Company Limited",
        company_phone: "+254704592362",
        company_website: "https://www.matchcompany.com",
        company_linkedin: "https://www.xekela.mobi",
        company_logo: "C",
        company_location: "Nairobi",
        title: "UI/UX Designer",
        category_id: 3,
        salary_range: "200,000 - 350,000",
        job_type: "Full Time",
        job_description: "<p>We are looking for an experienced Back-end and Front end developer to join our&nbsp;existing team. The developers will be responsible for the server side and the &lsquo;client-side&rsquo; of our web applications.&nbsp;If you have excellent programming skills and a passion for developing applications or improving existing ones, we would like to meet you. As a Back-end developer, you&rsquo;ll work closely with our engineers to ensure system consistency and improve user experience.</p> <p>As part of the team, you should be able to translate our company and customer needs into functional and appealing interactive applications. We expect you to be a tech-savvy professional, who is curious about new digital technologies and aspires to combine usability with visual design.</p> <p>&nbsp;</p> <p><strong>Responsibilities</strong></p> <ul> <li>Use markup languages to create user-friendly front ends in Javascript, HTML</li> <li>Maintain and improve existing Front end applications (Flutter, JS, React, React Native etc)</li> <li>Optimize applications for maximum speed</li> <li>Design mobile-based features</li> <li>Collaborate with back-end developers and web designers to improve usability</li> <li>Get feedback from, and build solutions for, users and customers</li> <li>Write functional requirement documents and guides</li> <li>Create quality mockups and prototypes</li> <li>Help back-end developers with coding and troubleshooting</li> <li>Ensure high quality graphic standards and brand consistency</li> <li>Collaborate with Front-end developers to integrate user-facing elements with server side logic</li> <li>Stay up-to-date on emerging technologies</li> </ul> <p><strong>Requirements</strong></p> <ul> <li>Proven working experience in Java &amp; JS development</li> <li>Hands on experience in designing and developing applications using Java EE platforms</li> <li>Object Oriented analysis and design using common design patterns.</li> <li>Profound insight of Java and JEE internals (Classloading, Memory Management, Transaction management etc)</li> <li>Excellent knowledge of Relational Databases, SQL and ORM technologies (JPA2, Hibernate)</li> <li>Experience in the Spring Framework</li> <li>Proven work experience as a Front-end developer</li> <li>Hands on experience with markup languages</li> <li>Experience with JavaScript, CSS and jQuery</li> <li>Familiarity with browser testing and debugging</li> <li>In-depth understanding of the entire web development process (design, development and deployment)</li> <li>Understanding of layout aesthetics</li> <li>Knowledge of SEO principles</li> <li>Familiarity with software like Adobe Suite, Photoshop and content management systems</li> <li>An ability to perform well in a fast-paced environment</li> <li>Excellent analytical and multitasking skills</li> </ul>",
        location: "Nairobi",
        application_deadline: "2-01-2023",
        experience: "2 years",
        qualification: "Bachelor's Degree",
        link_to_job: "https://www.jusoxoh.in",
        user_id: 2,
    },
    {
        company_name: "MWN Developers",
        company_phone: "+254711223344",
        company_website: "https://www.hiqu.us",
        company_linkedin: "https://www.xekela.mobi",
        company_logo: "M",
        company_location: "Nakuru",
        title: "Software Developer",
        category_id: 2,
        salary_range: "400000 - 500000",
        job_type: "Part Time",
        job_description: "<p>We are looking for an experienced Back-end and Front end developer to join our&nbsp;existing team. The developers will be responsible for the server side and the &lsquo;client-side&rsquo; of our web applications.&nbsp;If you have excellent programming skills and a passion for developing applications or improving existing ones, we would like to meet you. As a Back-end developer, you&rsquo;ll work closely with our engineers to ensure system consistency and improve user experience.</p> <p>As part of the team, you should be able to translate our company and customer needs into functional and appealing interactive applications. We expect you to be a tech-savvy professional, who is curious about new digital technologies and aspires to combine usability with visual design.</p> <p>&nbsp;</p> <p><strong>Responsibilities</strong></p> <ul> <li>Use markup languages to create user-friendly front ends in Javascript, HTML</li> <li>Maintain and improve existing Front end applications (Flutter, JS, React, React Native etc)</li> <li>Optimize applications for maximum speed</li> <li>Design mobile-based features</li> <li>Collaborate with back-end developers and web designers to improve usability</li> <li>Get feedback from, and build solutions for, users and customers</li> <li>Write functional requirement documents and guides</li> <li>Create quality mockups and prototypes</li> <li>Help back-end developers with coding and troubleshooting</li> <li>Ensure high quality graphic standards and brand consistency</li> <li>Collaborate with Front-end developers to integrate user-facing elements with server side logic</li> <li>Stay up-to-date on emerging technologies</li> </ul> <p><strong>Requirements</strong></p> <ul> <li>Proven working experience in Java &amp; JS development</li> <li>Hands on experience in designing and developing applications using Java EE platforms</li> <li>Object Oriented analysis and design using common design patterns.</li> <li>Profound insight of Java and JEE internals (Classloading, Memory Management, Transaction management etc)</li> <li>Excellent knowledge of Relational Databases, SQL and ORM technologies (JPA2, Hibernate)</li> <li>Experience in the Spring Framework</li> <li>Proven work experience as a Front-end developer</li> <li>Hands on experience with markup languages</li> <li>Experience with JavaScript, CSS and jQuery</li> <li>Familiarity with browser testing and debugging</li> <li>In-depth understanding of the entire web development process (design, development and deployment)</li> <li>Understanding of layout aesthetics</li> <li>Knowledge of SEO principles</li> <li>Familiarity with software like Adobe Suite, Photoshop and content management systems</li> <li>An ability to perform well in a fast-paced environment</li> <li>Excellent analytical and multitasking skills</li> </ul>",
        location: "Nakuru",
        application_deadline: "15-12-2022",
        experience: "5 years",
        qualification: "Bachelor's Degree",
        link_to_job: "https://www.jusoxoh.in",
        user_id: 2,
    },
    {
        company_name: "Underdog IO",
        company_phone: "+254755667788",
        company_website: "https://www.hiqu.us",
        company_linkedin: "https://www.xekela.mobi",
        company_logo: "U",
        company_location: "Kisumu",
        title: "Technical Mentor",
        category_id: 1,
        salary_range: "80000 - 100000",
        job_type: "Full Time",
        job_description: "<p>We are looking for an experienced Back-end and Front end developer to join our&nbsp;existing team. The developers will be responsible for the server side and the &lsquo;client-side&rsquo; of our web applications.&nbsp;If you have excellent programming skills and a passion for developing applications or improving existing ones, we would like to meet you. As a Back-end developer, you&rsquo;ll work closely with our engineers to ensure system consistency and improve user experience.</p> <p>As part of the team, you should be able to translate our company and customer needs into functional and appealing interactive applications. We expect you to be a tech-savvy professional, who is curious about new digital technologies and aspires to combine usability with visual design.</p> <p>&nbsp;</p> <p><strong>Responsibilities</strong></p> <ul> <li>Use markup languages to create user-friendly front ends in Javascript, HTML</li> <li>Maintain and improve existing Front end applications (Flutter, JS, React, React Native etc)</li> <li>Optimize applications for maximum speed</li> <li>Design mobile-based features</li> <li>Collaborate with back-end developers and web designers to improve usability</li> <li>Get feedback from, and build solutions for, users and customers</li> <li>Write functional requirement documents and guides</li> <li>Create quality mockups and prototypes</li> <li>Help back-end developers with coding and troubleshooting</li> <li>Ensure high quality graphic standards and brand consistency</li> <li>Collaborate with Front-end developers to integrate user-facing elements with server side logic</li> <li>Stay up-to-date on emerging technologies</li> </ul> <p><strong>Requirements</strong></p> <ul> <li>Proven working experience in Java &amp; JS development</li> <li>Hands on experience in designing and developing applications using Java EE platforms</li> <li>Object Oriented analysis and design using common design patterns.</li> <li>Profound insight of Java and JEE internals (Classloading, Memory Management, Transaction management etc)</li> <li>Excellent knowledge of Relational Databases, SQL and ORM technologies (JPA2, Hibernate)</li> <li>Experience in the Spring Framework</li> <li>Proven work experience as a Front-end developer</li> <li>Hands on experience with markup languages</li> <li>Experience with JavaScript, CSS and jQuery</li> <li>Familiarity with browser testing and debugging</li> <li>In-depth understanding of the entire web development process (design, development and deployment)</li> <li>Understanding of layout aesthetics</li> <li>Knowledge of SEO principles</li> <li>Familiarity with software like Adobe Suite, Photoshop and content management systems</li> <li>An ability to perform well in a fast-paced environment</li> <li>Excellent analytical and multitasking skills</li> </ul>",
        location: "Kisumu",
        application_deadline: "30-12-2022",
        experience: "1 year",
        qualification: "Bachelor's Degree",
        link_to_job: "https://www.jusoxoh.in",
        user_id: 3,
    },
    {
        company_name: "Turing",
        company_phone: "+25479900332277",
        company_website: "https://www.hiqu.us",
        company_linkedin: "https://www.xekela.mobi",
        company_logo: "T",
        company_location: "US",
        title: "Backend Engineer",
        category_id: 1,
        salary_range: "120000 - 300000",
        job_type: "Full Time",
        job_description: "<p>We are looking for an experienced Back-end and Front end developer to join our&nbsp;existing team. The developers will be responsible for the server side and the &lsquo;client-side&rsquo; of our web applications.&nbsp;If you have excellent programming skills and a passion for developing applications or improving existing ones, we would like to meet you. As a Back-end developer, you&rsquo;ll work closely with our engineers to ensure system consistency and improve user experience.</p> <p>As part of the team, you should be able to translate our company and customer needs into functional and appealing interactive applications. We expect you to be a tech-savvy professional, who is curious about new digital technologies and aspires to combine usability with visual design.</p> <p>&nbsp;</p> <p><strong>Responsibilities</strong></p> <ul> <li>Use markup languages to create user-friendly front ends in Javascript, HTML</li> <li>Maintain and improve existing Front end applications (Flutter, JS, React, React Native etc)</li> <li>Optimize applications for maximum speed</li> <li>Design mobile-based features</li> <li>Collaborate with back-end developers and web designers to improve usability</li> <li>Get feedback from, and build solutions for, users and customers</li> <li>Write functional requirement documents and guides</li> <li>Create quality mockups and prototypes</li> <li>Help back-end developers with coding and troubleshooting</li> <li>Ensure high quality graphic standards and brand consistency</li> <li>Collaborate with Front-end developers to integrate user-facing elements with server side logic</li> <li>Stay up-to-date on emerging technologies</li> </ul> <p><strong>Requirements</strong></p> <ul> <li>Proven working experience in Java &amp; JS development</li> <li>Hands on experience in designing and developing applications using Java EE platforms</li> <li>Object Oriented analysis and design using common design patterns.</li> <li>Profound insight of Java and JEE internals (Classloading, Memory Management, Transaction management etc)</li> <li>Excellent knowledge of Relational Databases, SQL and ORM technologies (JPA2, Hibernate)</li> <li>Experience in the Spring Framework</li> <li>Proven work experience as a Front-end developer</li> <li>Hands on experience with markup languages</li> <li>Experience with JavaScript, CSS and jQuery</li> <li>Familiarity with browser testing and debugging</li> <li>In-depth understanding of the entire web development process (design, development and deployment)</li> <li>Understanding of layout aesthetics</li> <li>Knowledge of SEO principles</li> <li>Familiarity with software like Adobe Suite, Photoshop and content management systems</li> <li>An ability to perform well in a fast-paced environment</li> <li>Excellent analytical and multitasking skills</li> </ul>",
        location: "US",
        application_deadline: "14-02-2023",
        experience: "3 years",
        qualification: "Bachelor's Degree",
        link_to_job: "https://www.jusoxoh.in",
        user_id: 1,
    }
])

puts "✅ Done seeding!"