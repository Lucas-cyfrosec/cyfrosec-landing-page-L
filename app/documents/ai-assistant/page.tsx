'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'CyfroAI Engine',
    title: 'CyfroAssistant',
    overview: 'CyfroAssistant is your AI-powered security analyst, available directly inside the CyfroSec Portal. It understands your specific infrastructure — your agents, scan results, vulnerabilities, topology — and lets you query it all in natural language, without writing queries or complex terminologies. It can also take specific actions once permission is provided by the user.',
    betaLabel: 'Beta:',
    betaText: 'CyfroAssistant is currently in beta. The Core functionality is stable, but the feature set is actively expanding.',
    startingTitle: 'Starting a Conversation',
    startingIntro: 'When you open CyfroAssistant for the first time (or start a new conversation), you land on an empty canvas with four clickable suggestion cards/function calls:',
    suggestionHeaders: ['Suggestion', 'What it does'],
    suggestions: [
      ['Analyze latest security scan', 'Retrieves and summarises your most recent scan results'],
      ['Show security insights', 'Summarises AI-generated insights from recent scans'],
      ['List active agents', 'Shows all currently online CyfroAgents in your account group'],
      ['Get scan summary', 'Provides a high-level overview of scan coverage and findings'],
    ] as [string, string][],
    sendingText1: 'Click any card to send that query immediately, or type your own question in the input box at the bottom.',
    sendingText2: 'To send a message: Type in the text box and press Enter (or click the Send button).',
    sendingShiftBefore: 'Press ',
    sendingShiftAfter: ' to add a line break without sending.',
    sendingText4: 'A new conversation session is created automatically the first time you send a message, using the first 50 characters of your message as its title.',
    chatTitle: 'The Chat Interface',
    streamingTitle: '1. Message Streaming',
    streamingIntro: 'Responses stream token-by-token in real time. While the assistant is working, the header shows one of three status badges:',
    streamingItems: [
      'Thinking: The assistant is reasoning through your query',
      'Working: The assistant is executing tools or fetching data',
      'Generating: The assistant is writing its response',
    ],
    streamingNote: 'A Stop button appears in the input area while streaming. Clicking it cancels the current response immediately.',
    approvalsTitle: '2. Human-in-the-Loop Approvals',
    approvalsIntro: 'For certain actions, particularly those that write data or carry higher risk, the assistant will pause and present an approval card before proceeding. The card shows:',
    approvalsItems: [
      'What action is being requested',
      'The risk level (Low / Medium / High / Critical)',
      'AI-generated explanation of what will happen',
      'Approve and Deny buttons',
    ],
    approvalsNote: 'You must actively approve or deny before the assistant continues. Approvals are single-use and expire after a set period.',
    workspaceTitle: '3. Workspace Panel',
    workspaceIntro: 'A collapsible right panel (click the panel toggle in the chat header) provides three tabs for deeper inspection:',
    workspaceHeaders: ['Tab', 'Contents'],
    workspaceTabs: [
      ['Tasks', 'Checkbox-style progress list of the steps the assistant is executing in real time'],
      ['Artifacts', 'Any files, data exports, or generated content produced during the conversation'],
      ['Tool Output', 'Raw arguments and results from each tool call — useful for auditing what data the assistant read or wrote'],
    ] as [string, string][],
    whatTitle: 'What You Can Ask',
    whatIntro: 'CyfroAssistant is aware of your infrastructure context and can answer questions such as:',
    scanQueriesTitle: 'Scan and vulnerability queries:',
    scanQueries: ['"Which hosts have Critical CVEs?"'],
    agentQueriesTitle: 'Agent and asset queries:',
    agentQueries: ['"List all active agents."', '"Which agents haven\'t run a scan in the last 24 hours?"'],
    insightQueriesTitle: 'Insights and risk queries:',
    insightQueries: [
      '"What are my highest risk findings this week?"',
      '"Are any of my exposed services flagged as reachable?"',
      '"Give me an executive summary of my current security posture."',
    ],
    howtoQueriesTitle: 'Platform how-to questions:',
    howtoQueries: [
      '"How do I create a new test?"',
      '"What does an Account Group Admin have access to?"',
      '"How do I register a new agent?"',
    ],
    whatNote: 'The assistant uses your actual scan data, agent status, vulnerability findings, and AI insight records to answer infrastructure-specific questions, and references product documentation for how-to queries. AI can make mistakes, please make sure to verify.',
    planTitle: 'Plan Mode',
    planText: 'Plan Mode lists a series of tasks which are to be executed in order for fulfilling the user\'s request, ranging from changing configurations or applying fixes. The tasks will be executed based on the user\'s approval.',
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',          label: 'Overview' },
      { id: 'starting',          label: 'Starting a Conversation' },
      { id: 'suggestions',       label: 'Suggestion Cards' },
      { id: 'sending',           label: 'Sending Messages' },
      { id: 'chat-interface',    label: 'The Chat Interface' },
      { id: 'streaming',         label: '1. Message Streaming' },
      { id: 'approvals',         label: '2. Human-in-the-Loop Approvals' },
      { id: 'workspace-panel',   label: '3. Workspace Panel' },
      { id: 'what-you-can-ask',  label: 'What You Can Ask' },
      { id: 'plan-mode',         label: 'Plan Mode' },
    ],
    contactSupport: 'Contact support',
  },
  ar: {
    category: 'محرك CyfroAI',
    title: 'CyfroAssistant',
    overview: 'CyfroAssistant هو محلل الأمان المدعوم بالذكاء الاصطناعي، متاح مباشرة داخل بوابة CyfroSec. يفهم بنيتك التحتية المحددة — الوكلاء ونتائج الفحص والثغرات والطوبولوجيا — ويتيح لك الاستعلام عنها جميعاً بلغة طبيعية دون كتابة استعلامات أو مصطلحات معقدة. يمكنه أيضاً اتخاذ إجراءات محددة بمجرد منح المستخدم الإذن.',
    betaLabel: 'تجريبي:',
    betaText: 'CyfroAssistant حالياً في مرحلة تجريبية. الوظائف الأساسية مستقرة لكن مجموعة الميزات تتوسع بنشاط.',
    startingTitle: 'بدء محادثة',
    startingIntro: 'عند فتح CyfroAssistant لأول مرة (أو بدء محادثة جديدة)، تصل إلى لوحة فارغة مع أربع بطاقات اقتراح قابلة للنقر:',
    suggestionHeaders: ['الاقتراح', 'ما يفعله'],
    suggestions: [
      ['تحليل آخر فحص أمني', 'يسترجع ويلخص أحدث نتائج الفحص'],
      ['عرض رؤى الأمان', 'يلخص الرؤى المولدة بالذكاء الاصطناعي من الفحوصات الأخيرة'],
      ['عرض الوكلاء النشطين', 'يُظهر جميع CyfroAgents المتصلة حالياً في مجموعة حسابك'],
      ['الحصول على ملخص الفحص', 'يوفر نظرة عامة على تغطية الفحص والنتائج'],
    ] as [string, string][],
    sendingText1: 'انقر على أي بطاقة لإرسال الاستعلام فوراً، أو اكتب سؤالك الخاص في مربع الإدخال بالأسفل.',
    sendingText2: 'لإرسال رسالة: اكتب في مربع النص واضغط Enter (أو انقر زر الإرسال).',
    sendingShiftBefore: 'اضغط ',
    sendingShiftAfter: ' لإضافة سطر جديد دون إرسال.',
    sendingText4: 'تُنشأ جلسة محادثة جديدة تلقائياً عند إرسال رسالتك الأولى مع استخدام أول 50 حرفاً كعنوان لها.',
    chatTitle: 'واجهة المحادثة',
    streamingTitle: '1. بث الرسائل',
    streamingIntro: 'تُبث الردود رمزاً بعد رمز في الوقت الفعلي. أثناء عمل المساعد يعرض الرأس إحدى ثلاث شارات حالة:',
    streamingItems: [
      'تفكير: يستنتج المساعد استجابةً لاستعلامك',
      'عمل: ينفذ المساعد أدوات أو يجلب بيانات',
      'توليد: يكتب المساعد ردّه',
    ],
    streamingNote: 'يظهر زر إيقاف في منطقة الإدخال أثناء البث. النقر عليه يلغي الاستجابة الحالية فوراً.',
    approvalsTitle: '2. موافقات الإنسان في الحلقة',
    approvalsIntro: 'لبعض الإجراءات، خاصة تلك التي تكتب بيانات أو تحمل مخاطر أعلى، سيتوقف المساعد ويعرض بطاقة موافقة قبل المتابعة. تُظهر البطاقة:',
    approvalsItems: [
      'الإجراء المطلوب',
      'مستوى الخطر (منخفض / متوسط / عالٍ / حرج)',
      'تفسير مولّد بالذكاء الاصطناعي لما سيحدث',
      'أزرار الموافقة والرفض',
    ],
    approvalsNote: 'يجب الموافقة أو الرفض بشكل نشط قبل أن يتابع المساعد. الموافقات للاستخدام مرة واحدة وتنتهي صلاحيتها بعد فترة محددة.',
    workspaceTitle: '3. لوحة مساحة العمل',
    workspaceIntro: 'لوحة يمين قابلة للطي (انقر على مفتاح التبديل في رأس المحادثة) توفر ثلاث تبويبات للفحص التفصيلي:',
    workspaceHeaders: ['التبويب', 'المحتوى'],
    workspaceTabs: [
      ['المهام', 'قائمة تقدم بأسلوب خانات الاختيار للخطوات التي ينفذها المساعد في الوقت الفعلي'],
      ['القطع الأثرية', 'أي ملفات أو تصدير بيانات أو محتوى مولّد أثناء المحادثة'],
      ['مخرجات الأدوات', 'الوسائط والنتائج الخام من كل استدعاء أداة — مفيد للتدقيق في البيانات التي قرأها المساعد أو كتبها'],
    ] as [string, string][],
    whatTitle: 'ما يمكنك السؤال عنه',
    whatIntro: 'يدرك CyfroAssistant سياق بنيتك التحتية ويمكنه الإجابة على أسئلة مثل:',
    scanQueriesTitle: 'استعلامات الفحص والثغرات:',
    scanQueries: ['"أي مضيفين لديهم CVE حرجة؟"'],
    agentQueriesTitle: 'استعلامات الوكيل والأصول:',
    agentQueries: ['"اعرض جميع الوكلاء النشطين."', '"أي وكلاء لم يجروا فحصاً في آخر 24 ساعة؟"'],
    insightQueriesTitle: 'استعلامات الرؤى والمخاطر:',
    insightQueries: [
      '"ما أعلى نتائج المخاطر لديّ هذا الأسبوع؟"',
      '"هل أي من خدماتي المكشوفة مُصنّفة كقابلة للوصول؟"',
      '"أعطني ملخصاً تنفيذياً عن وضعي الأمني الحالي."',
    ],
    howtoQueriesTitle: 'أسئلة كيفية استخدام المنصة:',
    howtoQueries: [
      '"كيف أنشئ اختباراً جديداً؟"',
      '"ما صلاحيات مسؤول مجموعة الحسابات؟"',
      '"كيف أسجل وكيلاً جديداً؟"',
    ],
    whatNote: 'يستخدم المساعد بيانات الفحص الفعلية وحالة الوكيل ونتائج الثغرات وسجلات الرؤى الذكية للإجابة على الأسئلة الخاصة بالبنية التحتية، ويرجع إلى توثيق المنتج لأسئلة الكيفية. قد يرتكب الذكاء الاصطناعي أخطاء، يرجى التحقق دائماً.',
    planTitle: 'وضع الخطة',
    planText: 'يُدرج وضع الخطة سلسلة من المهام التي سيتم تنفيذها بالترتيب لتلبية طلب المستخدم، بدءاً من تغيير الإعدادات وصولاً إلى تطبيق الإصلاحات. سيتم تنفيذ المهام بناءً على موافقة المستخدم.',
    tocTitle: 'في هذه الصفحة',
    tocItems: [
      { id: 'overview',          label: 'نظرة عامة' },
      { id: 'starting',          label: 'بدء محادثة' },
      { id: 'suggestions',       label: 'بطاقات الاقتراح' },
      { id: 'sending',           label: 'إرسال الرسائل' },
      { id: 'chat-interface',    label: 'واجهة المحادثة' },
      { id: 'streaming',         label: '1. بث الرسائل' },
      { id: 'approvals',         label: '2. موافقات الإنسان في الحلقة' },
      { id: 'workspace-panel',   label: '3. لوحة مساحة العمل' },
      { id: 'what-you-can-ask',  label: 'ما يمكنك السؤال عنه' },
      { id: 'plan-mode',         label: 'وضع الخطة' },
    ],
    contactSupport: 'تواصل مع الدعم',
  },
}

export default function AiAssistantPage() {
  const { lang } = useTranslation()
  const isAr = lang === 'ar'
  const c = CONTENT[lang as keyof typeof CONTENT] ?? CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.category}
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
          lang="en"
        >
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
          {c.overview}
        </p>

        <div className="mt-5 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-10">
          <strong className="cy-text-primary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.betaLabel}</strong>{' '}
          <span dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.betaText}</span>
        </div>

        <hr className="cy-border-default mb-10" />

        {/* Starting a Conversation */}
        <section id="starting" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.startingTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4" id="suggestions" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.startingIntro}
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.suggestionHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.suggestions.map(([suggestion, desc]) => (
                  <tr key={suggestion} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{suggestion}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm mb-3" id="sending" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.sendingText1}</p>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.sendingText2}</p>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.sendingShiftBefore}<kbd className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">Shift + Enter</kbd>{c.sendingShiftAfter}
          </p>
          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.sendingText4}</p>
        </section>

        {/* Chat Interface */}
        <section id="chat-interface" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.chatTitle}
          </h2>

          <h3 id="streaming" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.streamingTitle}
          </h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.streamingIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.streamingItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-6" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.streamingNote}</p>

          <h3 id="approvals" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.approvalsTitle}
          </h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.approvalsIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.approvalsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-6" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.approvalsNote}</p>

          <h3 id="workspace-panel" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.workspaceTitle}
          </h3>
          <p className="cy-text-secondary text-sm mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.workspaceIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.workspaceHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.workspaceTabs.map(([tab, contents]) => (
                  <tr key={tab} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{tab}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{contents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What You Can Ask */}
        <section id="what-you-can-ask" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.whatTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.whatIntro}</p>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.scanQueriesTitle}</h3>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.scanQueries.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.agentQueriesTitle}</h3>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.agentQueries.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.insightQueriesTitle}</h3>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.insightQueries.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }} dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.howtoQueriesTitle}</h3>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.howtoQueries.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{text}</span>
              </li>
            ))}
          </ol>

          <p className="cy-text-secondary text-sm" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.whatNote}</p>
        </section>

        {/* Plan Mode */}
        <section id="plan-mode" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
            dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
          >
            {c.planTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.planText}</p>
        </section>

      </article>

      {/* ── Right TOC ─────────────────────────────────────────────────── */}
      <aside className="hidden 2xl:block w-56 shrink-0 px-6 pt-10 pb-10">
        <div className="sticky top-10">
          <p className="text-[10px] font-bold uppercase tracking-widest cy-text-muted mb-3" dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>
            {c.tocTitle}
          </p>
          <ul className="space-y-2">
            {c.tocItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm cy-text-secondary hover:cy-text-brand transition-colors block"
                  dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t cy-border-default">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-xs cy-text-muted hover:cy-text-brand transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span dir={isAr ? 'rtl' : 'ltr'} lang={isAr ? 'ar' : 'en'}>{c.contactSupport}</span>
            </Link>
          </div>
        </div>
      </aside>

    </div>
  )
}
