// script.js
const translations = {
    en: {
        name: "Le Thanh Tung",
        job_title: "MARKETING MANAGEMENT & AI AGENTS",
        address: "K35 Tan Mai, Hoang Mai, Hanoi",
        core_competencies: "Core Competencies",
        comp_1: "AI-Driven Marketing Automation",
        comp_2: "Digital Marketing Strategy",
        comp_3: "SEO & Organic Growth",
        comp_4: "Data Analysis & ROI Optimization",
        comp_5: "Team Leadership & Development",
        comp_6: "E-commerce & Social Commerce",
        education: "Education",
        summary_title: "Professional Summary",
        summary_text: "Head of Marketing with 10+ years of driving revenue growth through Performance, SEO, and Social Media: led teams of up to 50 people, grew overall revenue by 150%, and scaled website traffic from 5,000 to 3,000,000 visits/month. Since 2025, combining marketing strategy with hands-on AI Agents & Automation deployment, helping businesses cut operating costs by 40-50% while scaling lead handling and content output.",
        exp_title: "Work Experience",
        achievements: "Key Achievements:",
        job1_title: "Head of Marketing",
        job1_desc1: "Managed and developed a marketing team of 30-50 members, overseeing Performance, SEO, Media, and Trade Marketing departments.",
        job1_desc2: "Created and expanded new revenue streams from paid advertising (Facebook, TikTok), social media, and SEO.",
        job1_desc3: "Optimized operational and personnel costs, ensuring a high return on investment (ROI).",
        job1_ach1: "Achieved a 150% overall revenue growth.",
        job1_ach2: "Reduced marketing and personnel costs by 30% through restructuring and performance optimization.",
        job6_title: "Marketing Strategy & AI Automation Consultant",
        job6_date: "2025 - Present",
        job6_desc1: "Advised SMEs and corporate groups (tourism, technology, chemicals, education, real estate, retail, manufacturing) on growth strategy, redesigning the marketing-sales funnel and embedding AI where it delivers the highest ROI.",
        job6_desc2: "Audited marketing and sales operations to pinpoint bottlenecks (lead handling, content production, reporting) and built AI transformation roadmaps tied to each company's revenue targets and budget.",
        job6_desc3: "Deployed AI Agents across the funnel: automated content production for SEO, Social, and Ads; lead qualification; multi-channel chatbots (Website, Facebook, Zalo, WhatsApp) for 24/7 lead nurturing; and automated marketing and management dashboards.",
        job6_desc4: "Built automation workflows on n8n, Make, and Zapier, integrating LLMs (Claude, ChatGPT, Gemini) with CRM, Google Workspace, and internal data; developed RAG knowledge bases for Sales and Customer Service teams.",
        job6_desc5: "Trained in-house marketing and sales teams to operate and scale AI workflows independently after handover.",
        job6_ach1: "Deployed AI-driven marketing and sales automation for dozens of businesses and corporate groups across multiple industries.",
        job6_ach2: "Cut manual processing time by 60-80% for repetitive workflows such as reporting, data entry, and lead/customer response.",
        job6_ach3: "Reduced content production and customer service costs by 40-50% while increasing content output and lead response speed.",
        job2_title: "Organic Marketing Manager",
        job2_desc1: "Led the Organic Marketing division, taking full ownership of traffic and revenue growth from all non-paid channels: SEO, Content, and Social Media.",
        job2_desc2: "Built and executed the SEO strategy for the entire website ecosystem: technical SEO, keyword research, on-page optimization, internal linking, and site architecture.",
        job2_desc3: "Managed the content team, developing topic clusters and an editorial roadmap aligned with the learning journey of students and parents.",
        job2_desc4: "Ran the social platform ecosystem (Facebook Fanpage & Group, TikTok, YouTube, Zalo OA), building a content strategy tailored to each platform's format and audience.",
        job2_desc5: "Developed a community of parents and students on Facebook Groups, turning it into a channel for lead nurturing and organic conversion.",
        job2_desc6: "Tracked performance with GA4, Google Search Console, and Ahrefs, reporting traffic, ranking, and conversion by channel to steer resource allocation.",
        job2_ach1: "Maintained SEO performance across existing websites and developed a satellite blog system, generating a significant increase in organic traffic.",
        job2_ach2: "Grew the social platform ecosystem, increasing reach and engagement and turning social into a stable organic lead source.",
        job2_ach3: "Reduced dependence on paid advertising by raising organic channels' contribution to overall lead volume.",
        job5_title: "Marketing Manager",
        job5_desc1: "Managed the overall marketing plan for the English learning product, owning targets for leads, cost per lead (CPL), and revenue contribution by channel.",
        job5_desc2: "Directed the multi-channel media mix across Facebook Ads, Google Ads, GDN, and Coc Coc, allocating budget by performance and optimizing CPL for each customer segment.",
        job5_desc3: "Built and led the SEO and Content team, developing organic search strategies to drive sustainable revenue growth.",
        job5_desc4: "Coordinated Marketing and Sales, redesigning the lead handover process and lead scoring to improve conversion from lead to enrolled student.",
        job5_desc5: "Ran campaigns, promotional programs, and product launches, working with Product and Academic teams on positioning and messaging.",
        job5_desc6: "Managed landing pages and CRO, running A/B tests on messaging, forms, and layout to raise registration rates.",
        job5_desc7: "Built the marketing performance reporting system, tracking the full funnel from traffic to revenue for weekly strategy decisions.",
        job5_ach1: "Drove SEO revenue to account for 50% of total channel revenue.",
        job5_ach2: "Cut cost per lead significantly by restructuring the channel mix and shifting budget toward organic.",
        job5_ach3: "Built the marketing team and standardized the campaign planning and execution process end to end.",
        job3_title: "SEO Manager",
        job3_desc1: "Built and managed a marketing team of over 20 members, planning growth strategies and optimizing ROI.",
        job3_desc2: "Responsible for the performance of Digital Advertising channels (Facebook, Google, Coc Coc).",
        job3_ach2: "Positioned Vntrip.vn as a leading OTA (Online Travel Agency) brand in Vietnam.",
        job3_ach3: "Grew website traffic from 5,000 to 3,000,000 visits/month within 12 months.",
        download_pdf: "Download PDF",
        job4_title: "Founder/Lead Consultant",
        job4_date: "2011 - Present",
        job4_desc1: "Founded and managed an agency, providing consulting, planning, and execution of marketing campaigns for clients across various industries.",
        job4_desc2: "Directly provided Marketing training for businesses such as Zestech, Davosa, Ecomirai, simphongthuy.vn, Next-tech Group, etc.",
    },
    vi: {
        download_pdf: "Tải bản PDF",
        name: "Lê Thanh Tùng",
        job_title: "QUẢN TRỊ MARKETING & AI AGENTS",
        address: "K35 Tân Mai, Hoàng Mai, Hà Nội",
        core_competencies: "Năng Lực Cốt Lõi",
        comp_1: "AI-Driven Marketing Automation",
        comp_2: "Digital Marketing Strategy",
        comp_3: "SEO & Organic Growth",
        comp_4: "Data Analysis & ROI Optimization",
        comp_5: "Team Leadership & Development",
        comp_6: "E-commerce & Social Commerce",
        education: "Học Vấn",
        summary_title: "Tóm Tắt Khái Quát",
        summary_text: "Head of Marketing với hơn 10 năm tăng trưởng doanh thu qua các kênh Performance, SEO và Social Media: dẫn dắt đội ngũ tới 50 người, tăng 150% doanh thu tổng thể, đưa traffic website từ 5.000 lên 3.000.000 lượt/tháng. Từ 2025, kết hợp tư duy chiến lược marketing với năng lực triển khai AI Agents & Automation, giúp doanh nghiệp giảm 40-50% chi phí vận hành trong khi tăng năng lực xử lý lead và sản lượng nội dung.",
        exp_title: "Kinh Nghiệm Làm Việc",
        achievements: "Thành Tích Điển Hình:",
        job1_title: "Giám Đốc Marketing",
        job1_desc1: "Quản lý và phát triển đội ngũ marketing từ 30-50 thành viên, phụ trách các bộ phận Performance, SEO, Media và Trade Marketing.",
        job1_desc2: "Xây dựng và mở rộng các nguồn doanh thu mới từ quảng cáo trả phí (Facebook, TikTok), mạng xã hội và SEO.",
        job1_desc3: "Tối ưu hóa chi phí vận hành và nhân sự, đảm bảo tỷ suất hoàn vốn (ROI) cao nhất.",
        job1_ach1: "Đạt mức tăng trưởng doanh thu tổng thể 150%.",
        job1_ach2: "Giảm 30% chi phí marketing và nhân sự thông qua việc tái cấu trúc đội ngũ và hiệu suất.",
        job6_title: "Tư Vấn Chiến Lược Marketing & Triển Khai AI Automation",
        job6_date: "2025 - Hiện tại",
        job6_desc1: "Tư vấn chiến lược tăng trưởng cho doanh nghiệp vừa và nhỏ, tập đoàn thuộc nhiều lĩnh vực (du lịch, công nghệ, hóa chất, giáo dục, bất động sản, bán lẻ, sản xuất): thiết kế lại phễu marketing - sales và đưa AI vào đúng những điểm mang lại ROI cao nhất.",
        job6_desc2: "Khảo sát vận hành marketing và sales để xác định điểm nghẽn (xử lý lead, sản xuất nội dung, báo cáo), xây dựng lộ trình chuyển đổi AI gắn với mục tiêu doanh thu và ngân sách của từng doanh nghiệp.",
        job6_desc3: "Triển khai AI Agent trên toàn phễu: tự động sản xuất nội dung cho SEO, Social và Ads; tự động phân loại lead; chatbot tư vấn đa kênh (Website, Facebook, Zalo, WhatsApp) nuôi dưỡng lead 24/7; dashboard marketing và báo cáo quản trị tự động.",
        job6_desc4: "Xây dựng các luồng automation trên n8n, Make, Zapier; tích hợp các mô hình ngôn ngữ lớn (Claude, ChatGPT, Gemini) với CRM, Google Workspace và dữ liệu nội bộ; phát triển hệ thống tri thức RAG cho đội Sales và Chăm sóc khách hàng.",
        job6_desc5: "Đào tạo đội ngũ marketing và sales nội bộ để tự vận hành, mở rộng các workflow AI sau khi bàn giao.",
        job6_ach1: "Đã triển khai hệ thống AI Automation cho marketing và sales tại hàng chục doanh nghiệp, tập đoàn ở nhiều lĩnh vực.",
        job6_ach2: "Giảm 60-80% thời gian xử lý thủ công cho các quy trình lặp lại như tổng hợp báo cáo, nhập liệu và phản hồi lead/khách hàng.",
        job6_ach3: "Tiết kiệm 40-50% chi phí sản xuất nội dung và chăm sóc khách hàng, đồng thời tăng sản lượng nội dung và tốc độ phản hồi lead.",
        job2_title: "Organic Marketing Manager",
        job2_desc1: "Dẫn dắt khối Organic Marketing, chịu trách nhiệm toàn bộ tăng trưởng traffic và doanh thu từ các kênh không trả phí: SEO, Content và Social Media.",
        job2_desc2: "Xây dựng và triển khai chiến lược SEO cho toàn bộ hệ thống website: SEO kỹ thuật, nghiên cứu từ khóa, tối ưu on-page, internal link và cấu trúc site.",
        job2_desc3: "Quản lý đội ngũ content, phát triển hệ thống chủ đề (topic cluster) và lộ trình nội dung bám sát hành trình học tập của học sinh và phụ huynh.",
        job2_desc4: "Vận hành hệ sinh thái các nền tảng social (Facebook Fanpage & Group, TikTok, YouTube, Zalo OA), xây dựng chiến lược nội dung riêng phù hợp với định dạng và tệp người dùng của từng nền tảng.",
        job2_desc5: "Phát triển cộng đồng phụ huynh và học sinh trên Facebook Group, biến đây thành kênh nuôi dưỡng và chuyển đổi khách hàng tự nhiên.",
        job2_desc6: "Đo lường hiệu quả bằng GA4, Google Search Console và Ahrefs; báo cáo traffic, thứ hạng và tỷ lệ chuyển đổi theo từng kênh để điều phối nguồn lực.",
        job2_ach1: "Duy trì hiệu suất SEO cho các website hiện có và phát triển thêm hệ thống blog vệ tinh, tăng trưởng đáng kể lượng traffic tự nhiên.",
        job2_ach2: "Tăng trưởng hệ sinh thái các nền tảng social, mở rộng độ phủ và tương tác, đưa social trở thành nguồn lead organic ổn định.",
        job2_ach3: "Giảm sự phụ thuộc vào quảng cáo trả phí nhờ nâng tỷ trọng đóng góp lead từ các kênh organic.",
        job5_title: "Marketing Manager",
        job5_desc1: "Quản lý kế hoạch marketing tổng thể cho sản phẩm học tiếng Anh, chịu trách nhiệm chỉ tiêu về lead, chi phí trên mỗi lead (CPL) và tỷ trọng doanh thu theo kênh.",
        job5_desc2: "Điều phối media mix đa kênh: Facebook Ads, Google Ads, GDN, Cốc Cốc; phân bổ ngân sách theo hiệu suất và tối ưu CPL cho từng nhóm khách hàng.",
        job5_desc3: "Xây dựng và dẫn dắt đội ngũ SEO và Content, phát triển chiến lược tìm kiếm tự nhiên để thúc đẩy tăng trưởng doanh thu bền vững.",
        job5_desc4: "Phối hợp giữa Marketing và Sales, chuẩn hóa quy trình bàn giao lead và chấm điểm lead nhằm tăng tỷ lệ chuyển đổi từ lead thành học viên.",
        job5_desc5: "Triển khai các chiến dịch truyền thông, chương trình khuyến mãi và ra mắt sản phẩm, làm việc cùng bộ phận Sản phẩm và Học thuật về định vị và thông điệp.",
        job5_desc6: "Quản lý hệ thống landing page và tối ưu chuyển đổi (CRO), chạy A/B test về thông điệp, form đăng ký và bố cục để tăng tỷ lệ điền form.",
        job5_desc7: "Xây dựng hệ thống báo cáo hiệu quả marketing, theo dõi toàn bộ phễu từ traffic đến doanh thu phục vụ ra quyết định chiến lược hàng tuần.",
        job5_ach1: "Đưa doanh thu từ SEO chiếm 50% tỷ trọng tổng doanh thu toàn kênh.",
        job5_ach2: "Giảm đáng kể chi phí trên mỗi lead nhờ tái cấu trúc cơ cấu kênh và dịch chuyển ngân sách sang organic.",
        job5_ach3: "Xây dựng đội ngũ marketing và chuẩn hóa quy trình lập kế hoạch, triển khai chiến dịch từ đầu đến cuối.",
        job3_title: "SEO Manager",
        job3_desc1: "Xây dựng và quản lý đội ngũ marketing hơn 20 thành viên, lập kế hoạch tăng trưởng và tối ưu hóa ROI.",
        job3_desc2: "Quản lý hiệu suất của các kênh Quảng cáo Digital (Facebook, Google, Cốc Cốc...)",
        job3_ach2: "Định vị Vntrip trở thành một trong các thương hiệu OTA hàng đầu tại Việt Nam.",
        job3_ach3: "Tăng lưu lượng truy cập website từ 5.000 lên tới 3.000.000 lượt/tháng trong vòng 12 tháng.",
        job4_title: "Người Sáng Lập / Cố Vấn Marketing",
        job4_date: "2011 - Hiện tại",
        job4_desc1: "Thành lập và quản lý agency, cung cấp các dịch vụ tư vấn, lập chiến lược và thực thi marketing cho các nhãn hàng ở đa dạng lĩnh vực.",
        job4_desc2: "Làm cố vấn và đào tạo trực tiếp về Marketing cho các doanh nghiệp như Zestech, Davosa, Ecomirai, simphongthuy.vn, Next-tech Group...",
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-vi').classList.toggle('active', lang === 'vi');

    const btnPdf = document.getElementById('btn-pdf');
    if (btnPdf) {
        btnPdf.href = lang === 'vi' ? 'CV_LeThanhTung_VI.pdf' : 'CV_LeThanhTung_EN.pdf';
    }
    
    // Smooth transition effect
    document.querySelector('.container').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.container').style.opacity = 1;
    }, 150);
}

// Add CSS transition for opacity into elements dynamically
document.querySelector('.container').style.transition = 'opacity 0.2s ease-in-out';
