export default data2 = [
  {
    title: 'google software engineer',
    description: `Google's software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We're looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day. As a software engineer, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.

Google aspires to be an organization that reflects the globally diverse audience that our products and technology serve. We believe that in addition to hiring the best talent, a diversity of perspectives, ideas and cultures leads to the creation of better products and services.

Google is and always will be an engineering company. We hire people with a broad set of technical skills who are ready to take on some of technology's greatest challenges and make an impact on millions, if not billions, of users. At Google, engineers not only revolutionize search, they routinely work on massive scalability and storage solutions, large-scale applications and entirely new platforms for developers around the world. From AdWords to Chrome, Android to YouTube, Social to Local, Google engineers are changing the world one technological achievement after another.`,
    solution: `Responsibilities

    Design, develop, test, deploy, maintain and improve software.
    Manage individual project priorities, deadlines and deliverables.

Qualifications
Minimum qualifications:

    BS degree in Computer Science, similar technical field of study or equivalent practical experience.
    Software development experience in one or more general purpose programming languages.
    Experience working with two or more from the following: web application development, Unix/Linux environments, mobile application development, distributed and parallel systems, machine learning, information retrieval, natural language processing, networking, developing large software systems, and/or security software development.


Preferred qualifications:

    Master’s, PhD degree, further education or experience in engineering, computer science or other technical related field.
    Experience with one or more general purpose programming languages including but not limited to: Java, C/C++, C#, Objective C, Python, JavaScript, or Go.
    Interest and ability to learn other coding languages as needed.
    Working proficiency and communication skills in verbal and written English.`,
  },
  {
    title: 'Software Engineer, Tools and Infrastructure',
    description: `Responsibilities

    Lead/contribute to engineering efforts from design to implementation, solving complex technical challenges around developer and engineering productivity and velocity
    Design and build advanced automated build, test and release infrastructure
    Drive adoption of best practices in code health, testing, and maintainability
    Analyze and decompose complex software systems and collaborate with cross-functional teams to influence design for testability`,
    solution: ` Qualifications
Minimum qualifications:

    BS in Computer Science or related technical field or equivalent practical experience
    Software development experience in one or more general purpose programming languages
    Experience in at least one of the following: test automation, refactoring code, test-driven development, build infrastructure, optimizing software, debugging, building tools and testing frameworks


Preferred qualifications:

    Master's or PhD in Computer Science or related technical field
    Experience with one or more general purpose programming languages including but not limited to: Java, C/C++, C#, Objective C, Python, JavaScript, or Go
    Scripting skills in Python, Perl, Shell or another common language`,
  },
  {
    title: '436. Find Right Interval',
    description: `Given a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i, which can be called that j is on the \"right\" of i.
For any interval i, you need to store the minimum interval j\'s index, which means that the interval j has the minimum start point to build the \"right\" relationship for interval i. If the interval j doesn\'t exist, store -1 for the interval i. Finally, you need output the stored value of each interval as an array. `,
    solution: `
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} interval
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    const ans = [];
    const lst = [];
    for(let i = 0; i < intervals.length; i++) lst.push([intervals[i].start, intervals[i].end, i]);
    lst.sort((a, b)=>(a[0]-b[0]));
    //console.log(lst);
    for(let interval of intervals) {
        const end = interval.end;
        let ind1 =0; ind2 = lst.length-1;
        let flag = false;
        while(ind1<=ind2) {
            const mid = (ind1+ind2)>>1;
            if(lst[mid][0]==end) {
                ans.push(lst[mid][2]);
                flag = true;
                break;
            } else if(lst[mid][0]>end) {
                ind2 = mid-1;
            } else {
                ind1 = mid+1;
            }
        }
        if(!flag) {
            if(0<=ind1 && ind1<lst.length) {
                ans.push(lst[ind1][2]);
            } else {
                ans.push(-1);
            }
        }
    }
    return ans;
};

`,
  },

];


