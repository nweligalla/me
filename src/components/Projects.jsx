import React from 'react'
import ProjectCard from './resusables/ProjectCard';


function projects() {
    return (
        <div name='experience' className='w-full '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='text-center'>
                    <p className='section-title '>Work Experience</p>
                </div>
                
                <div className=" mt-9 mx-auto  dark:text-gray-100">
                    <ul className="space-y-2">
                        <ProjectCard
                            time={'Jan 2023'}
                            projectName={'Dialog - Samsung Galaxy S24 Pre order platform'}
                            description={'Developed a comprehensive Pre-Order Platform for the Samsung Galaxy S24 launch as a Full Stack Developer. The platform includes a user-friendly pre-order page with an integrated admin panel for efficient user, product and order management.'}
                            techStack={['Java', 'Spring boot', 'Spring MVC', 'Thymeleaf', 'HTML', 'CSS', 'JS', 'AWS', 'MySQL',]}
                            company={'Associated with auraDOT'}
                        />
                        <ProjectCard
                            time={'Nov 2021'}
                            projectName={'Ninehearts - Convocation Management Platform'}
                            description={'Developing a Convocation Management System as a Full Stack Developer, featuring user/customer management, event coordination, image handling, product integration, and automated SMS/email communication. The system facilitates seamless planning and execution of convocation events while enhancing user experience'}
                            techStack={['Java', 'Spring boot', 'Spring MVC', 'Thymeleaf', 'HTML', 'CSS', 'JS', 'AWS', 'MySQL',]}
                            company={'Associated with auraDOT'}
                        />
                        <ProjectCard
                            time={'Oct 2023'}
                            projectName={'Ninehearts - Convocation Image management desktop application'}
                            description={'Developed a cross-platform desktop application as an extension to the Ninehearts Convocation Management Platform. This extension desktop application efficiently processes images of customers for internal employees based on data exported from the main platform,'}
                            techStack={['ElectronJS', 'HTML', 'CSS', 'JS', 'NodeJS',]}
                            company={'Associated with auraDOT'}
                        />
                        <ProjectCard
                            time={'Sep 2022'}
                            projectName={'Dialog - iPhone 15 Series Pre order platform'}
                            description={'Developed a comprehensive Pre-Order Platform for the iPhone 15 Series launch as a Full Stack Developer. The platform includes a user-friendly pre-order page with an integrated admin panel for efficient user and product and order management.'}
                            techStack={['Java', 'Spring boot', 'Spring MVC', 'Thymeleaf', 'HTML', 'CSS', 'JS', 'AWS', 'MySQL',]}
                            company={'Associated with auraDOT'}
                        />
                        <ProjectCard
                            time={'Aug 2022'}
                            projectName={'Dialog - Samsung Galaxy Fold 5 and Flip 5 series Preorder platform'}
                            description={'Developed a comprehensive Pre-Order Platform for the iPhone 15 Series launch as a Full Stack Developer. The platform includes a user-friendly pre-order page with an integrated admin panel for efficient user and product and order management.'}
                            techStack={['Java', 'Spring boot', 'Spring MVC', 'Thymeleaf', 'HTML', 'CSS', 'JS', 'AWS', 'MySQL',]}
                            company={'Associated with auraDOT'}
                        />
                        <ProjectCard
                            time={'June 2022'}
                            projectName={'Dialog Spot Offers Web Application'}
                            description={'Developed a comprehensive Pre-Order Platform for mobile devices as a Full Stack Developer. The platform includes a user-friendly pre-order page with an integrated admin panel for efficient user, product and order management.'}
                            techStack={['Java', 'Spring boot', 'Spring MVC', 'Thymeleaf', 'HTML', 'CSS', 'JS', 'AWS', 'MySQL',]}
                            company={'Associated with auraDOT'}
                        />
                        <ProjectCard
                            time={'Nov 2021'}
                            projectName={'Data Entry Platform'}
                            description={'Designed and implemented a web-based data entry platform as a Full Stack Developer, featuring user management. The platform extracts information from user-input files, efficiently transforming it into a suitable format for data entry and generating output in alignment with the file\'s specifications.'}
                            techStack={['Java', 'Spring boot', 'Spring MVC', 'Thymeleaf', 'HTML', 'CSS', 'JS', 'MySQL',]}
                            company={'Associated with auraDOT'}
                        />
                        <ProjectCard
                            time={'Nov 2021'}
                            projectName={'E-Policy managemnet System'}
                            description={'Designed and implemented a web-based data entry platform as a Full Stack Developer, featuring user management. The platform extracts information from user-input files, efficiently transforming it into a suitable format for data entry and generating output in alignment with the file\'s specifications.'}
                            techStack={['Java', 'Spring boot', 'Spring MVC', 'Thymeleaf', 'HTML', 'CSS', 'JS', 'Jquery', 'MySQL',]}
                            company={'Associated with auraDOT'}
                        />
                        <ProjectCard
                            time={'Jan 2022'}
                            projectName={'Dialog - Samsung Galaxy S23 Pre order platform'}
                            description={'Developed a comprehensive Pre-Order Platform for the Samsung Galaxy S23 launch as a Full Stack Developer. The platform includes a user-friendly pre-order page with an integrated admin panel for efficient user, product and order management.'}
                            techStack={['Java', 'Spring boot', 'Spring MVC', 'Thymeleaf', 'HTML', 'CSS', 'JS', 'AWS', 'MySQL',]}
                            company={'Associated with auraDOT'}
                        />
                        <ProjectCard
                            time={'Aug 2021'}
                            projectName={'E-Commerce Platform'}
                            description={'Developed a comprehensive Pre-Order Platform for the Samsung Galaxy S23 launch as a Full Stack Developer. The platform includes a user-friendly pre-order page with an integrated admin panel for efficient user, product and order management.'}
                            techStack={['Java', 'Spring boot', 'Spring MVC', 'Thymeleaf', 'HTML', 'CSS', 'JS', 'Jquery', 'MySQL',]}
                            company={'Associated with auraDOT'}
                        />
                        <ProjectCard
                            time={'Apr 2021'}
                            projectName={'auraDOCS - DMS Version 2'}
                            description={'During my time as an intern at AuraDOT, I primarily focused on front-end development using HTML, CSS, JavaScript. and jQuery for the AuraDOCS Document Management System, I contributed to creating a user-friendly interface and implemented various front-end features. Additionally, I gained experience in backend development by successfully implementing several Services Using Java and Spring Framework.'}
                            techStack={['Java', 'Spring', 'HTML', 'CSS', 'JS', 'Jquery', 'MySQL',]}
                            company={'Associated with auraDOT'}
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default projects