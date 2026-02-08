"""
DDR Health & Fitness — Free Lead Magnet Guide
"The 5 Biggest Health Mistakes Busy Professionals Make (And How to Fix Them)"

Written in David D. Rogers' voice based on his whole-life habits philosophy.
Uses reportlab to generate a polished, branded PDF.
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak,
    Table, TableStyle, HRFlowable, KeepTogether,
)
from reportlab.pdfgen import canvas
import os

# ── Brand Colors ──
DARK = HexColor('#0f172a')
DARK_LIGHT = HexColor('#1e293b')
TEAL = HexColor('#0d9488')
TEAL_LIGHT = HexColor('#14b8a6')
TEAL_BG = HexColor('#f0fdfa')
WHITE = HexColor('#f8fafc')
GRAY = HexColor('#64748b')
GRAY_LIGHT = HexColor('#94a3b8')
TEXT_DARK = HexColor('#1e293b')

# ── Output path ──
OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)))
OUTPUT_PATH = os.path.join(OUTPUT_DIR, 'public', 'DDR-Health-5-Mistakes-Guide.pdf')

# ── Custom Styles ──
styles = {
    'cover_title': ParagraphStyle(
        'CoverTitle',
        fontSize=28,
        leading=34,
        textColor=DARK,
        fontName='Helvetica-Bold',
        alignment=TA_CENTER,
        spaceAfter=12,
    ),
    'cover_subtitle': ParagraphStyle(
        'CoverSubtitle',
        fontSize=14,
        leading=20,
        textColor=TEAL,
        fontName='Helvetica',
        alignment=TA_CENTER,
        spaceAfter=6,
    ),
    'cover_author': ParagraphStyle(
        'CoverAuthor',
        fontSize=11,
        leading=16,
        textColor=GRAY,
        fontName='Helvetica',
        alignment=TA_CENTER,
        spaceAfter=4,
    ),
    'section_number': ParagraphStyle(
        'SectionNumber',
        fontSize=48,
        leading=52,
        textColor=TEAL,
        fontName='Helvetica-Bold',
        alignment=TA_LEFT,
    ),
    'mistake_title': ParagraphStyle(
        'MistakeTitle',
        fontSize=20,
        leading=26,
        textColor=DARK,
        fontName='Helvetica-Bold',
        alignment=TA_LEFT,
        spaceAfter=8,
    ),
    'h2': ParagraphStyle(
        'H2',
        fontSize=16,
        leading=22,
        textColor=TEAL,
        fontName='Helvetica-Bold',
        alignment=TA_LEFT,
        spaceBefore=16,
        spaceAfter=8,
    ),
    'body': ParagraphStyle(
        'Body',
        fontSize=11,
        leading=17,
        textColor=TEXT_DARK,
        fontName='Helvetica',
        alignment=TA_LEFT,
        spaceAfter=10,
    ),
    'quote_box': ParagraphStyle(
        'QuoteBox',
        fontSize=11,
        leading=17,
        textColor=TEAL,
        fontName='Helvetica-Oblique',
        alignment=TA_LEFT,
        leftIndent=20,
        rightIndent=20,
        spaceAfter=12,
        spaceBefore=8,
    ),
    'bullet': ParagraphStyle(
        'Bullet',
        fontSize=11,
        leading=17,
        textColor=TEXT_DARK,
        fontName='Helvetica',
        alignment=TA_LEFT,
        leftIndent=24,
        bulletIndent=12,
        spaceAfter=4,
    ),
    'footer': ParagraphStyle(
        'Footer',
        fontSize=8,
        leading=10,
        textColor=GRAY_LIGHT,
        fontName='Helvetica',
        alignment=TA_CENTER,
    ),
    'cta_headline': ParagraphStyle(
        'CTAHeadline',
        fontSize=18,
        leading=24,
        textColor=DARK,
        fontName='Helvetica-Bold',
        alignment=TA_CENTER,
        spaceAfter=10,
    ),
    'cta_body': ParagraphStyle(
        'CTABody',
        fontSize=11,
        leading=17,
        textColor=TEXT_DARK,
        fontName='Helvetica',
        alignment=TA_CENTER,
        spaceAfter=6,
    ),
}


def add_header_footer(canvas_obj, doc):
    """Add branded header line and footer to each page."""
    canvas_obj.saveState()
    width, height = letter

    # Top teal accent line
    canvas_obj.setStrokeColor(TEAL)
    canvas_obj.setLineWidth(3)
    canvas_obj.line(0.75 * inch, height - 0.5 * inch, width - 0.75 * inch, height - 0.5 * inch)

    # Footer
    canvas_obj.setFont('Helvetica', 8)
    canvas_obj.setFillColor(GRAY_LIGHT)
    canvas_obj.drawCentredString(
        width / 2, 0.5 * inch,
        'DDR Health & Fitness  |  ddrhealthandfitness@yahoo.com  |  @ddr_bna'
    )

    # Page number
    canvas_obj.drawRightString(
        width - 0.75 * inch, 0.5 * inch,
        f'{doc.page}'
    )

    canvas_obj.restoreState()


def build_cover(story):
    """Cover page."""
    story.append(Spacer(1, 1.5 * inch))

    # Title
    story.append(Paragraph(
        'The 5 Biggest Health Mistakes<br/>Busy Professionals Make',
        styles['cover_title']
    ))
    story.append(Spacer(1, 8))

    # Subtitle
    story.append(Paragraph(
        '(And How to Fix Them Without Overhauling Your Entire Life)',
        styles['cover_subtitle']
    ))
    story.append(Spacer(1, 30))

    # Teal divider
    story.append(HRFlowable(
        width='40%', thickness=2, color=TEAL,
        spaceAfter=20, spaceBefore=0,
    ))

    # Author
    story.append(Paragraph(
        'By David D. Rogers',
        styles['cover_author']
    ))
    story.append(Paragraph(
        'AFAA Certified Personal Trainer  |  BS Exercise Science',
        styles['cover_author']
    ))
    story.append(Paragraph(
        'Cancer Exercise Specialist (CETI)  |  2x Ironman Finisher',
        styles['cover_author']
    ))
    story.append(Spacer(1, 40))
    story.append(Paragraph(
        'DDR Health &amp; Fitness  |  Nashville, TN',
        styles['cover_author']
    ))
    story.append(Paragraph(
        'ddrhealthandfitness@yahoo.com  |  636-346-6752',
        styles['cover_author']
    ))

    story.append(PageBreak())


def build_intro(story):
    """Introduction page."""
    story.append(Spacer(1, 0.5 * inch))
    story.append(Paragraph('A Note From David', styles['mistake_title']))
    story.append(Spacer(1, 6))

    intro_text = [
        "If you're reading this, you're already ahead of most people. You know something needs to change with your health, and you're looking for answers. That puts you in the top 10%.",
        "I've been in the health and fitness industry for over three decades. I've worked with executives, parents, cancer survivors, and endurance athletes. I've completed two Ironman triathlons, a 100-mile ultra marathon, and competed in powerlifting. I've seen what works and, more importantly, what doesn't.",
        "Here's what I've learned: the people who struggle aren't lazy. They're not unmotivated. They're just making a handful of common mistakes that quietly sabotage their progress. Once you fix those, everything changes.",
        "This guide covers the five patterns I see over and over with busy professionals. For each one, I'll explain why it happens, why it matters, and give you a practical fix you can start using this week.",
        "No extreme diets. No two-hour gym sessions. Just sound, individualized advice that's real.",
        "Let's get into it."
    ]

    for para in intro_text:
        story.append(Paragraph(para, styles['body']))

    story.append(PageBreak())


def build_mistake(story, number, title, why_it_happens, why_it_matters, the_fix, fix_bullets, ddr_tip):
    """Build a single mistake section (1-2 pages)."""
    story.append(Spacer(1, 0.3 * inch))

    # Mistake number + title
    story.append(Paragraph(f'MISTAKE #{number}', styles['section_number']))
    story.append(Spacer(1, 4))
    story.append(Paragraph(title, styles['mistake_title']))
    story.append(HRFlowable(
        width='100%', thickness=1, color=TEAL_LIGHT,
        spaceAfter=16, spaceBefore=8,
    ))

    # Why it happens
    story.append(Paragraph('Why This Happens', styles['h2']))
    story.append(Paragraph(why_it_happens, styles['body']))

    # Why it matters
    story.append(Paragraph('Why It Matters', styles['h2']))
    story.append(Paragraph(why_it_matters, styles['body']))

    # The fix
    story.append(Paragraph('The Fix', styles['h2']))
    story.append(Paragraph(the_fix, styles['body']))

    for bullet in fix_bullets:
        story.append(Paragraph(f'\u2022  {bullet}', styles['bullet']))

    story.append(Spacer(1, 8))

    # DDR Tip callout box
    tip_data = [[Paragraph(
        f'<b>DDR Tip:</b> {ddr_tip}',
        styles['quote_box']
    )]]
    tip_table = Table(tip_data, colWidths=[6.5 * inch])
    tip_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), TEAL_BG),
        ('TOPPADDING', (0, 0), (-1, -1), 12),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
        ('LEFTPADDING', (0, 0), (-1, -1), 16),
        ('RIGHTPADDING', (0, 0), (-1, -1), 16),
        ('ROUNDEDCORNERS', [6, 6, 6, 6]),
        ('LINEBELOW', (0, 0), (-1, -1), 0, TEAL_BG),
    ]))
    story.append(tip_table)
    story.append(PageBreak())


def build_cta(story):
    """Final CTA page."""
    story.append(Spacer(1, 1.5 * inch))

    story.append(Paragraph(
        'Ready to Go Deeper?',
        styles['cta_headline']
    ))
    story.append(Spacer(1, 10))

    story.append(Paragraph(
        "This guide gives you the awareness. But lasting change happens with accountability, "
        "a personalized plan, and someone in your corner who's done this for three decades.",
        styles['cta_body']
    ))
    story.append(Spacer(1, 10))

    story.append(Paragraph(
        "I offer a <b>free 20-minute discovery call</b> where we'll talk about your goals, "
        "your lifestyle, and whether we're a good fit. No pressure, no sales pitch \u2014 just "
        "an honest conversation about what's possible for you.",
        styles['cta_body']
    ))
    story.append(Spacer(1, 20))

    # CTA box
    cta_data = [[
        Paragraph(
            '<b>Schedule Your Free Discovery Call</b><br/><br/>'
            'Email: ddrhealthandfitness@yahoo.com<br/>'
            'Phone: 636-346-6752<br/>'
            'Instagram: @ddr_bna<br/><br/>'
            'Or visit ddrhealthandfitness.com',
            ParagraphStyle(
                'CTABox', parent=styles['cta_body'],
                textColor=DARK, alignment=TA_CENTER,
            )
        )
    ]]
    cta_table = Table(cta_data, colWidths=[5 * inch])
    cta_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), TEAL_BG),
        ('TOPPADDING', (0, 0), (-1, -1), 24),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 24),
        ('LEFTPADDING', (0, 0), (-1, -1), 24),
        ('RIGHTPADDING', (0, 0), (-1, -1), 24),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('ROUNDEDCORNERS', [8, 8, 8, 8]),
    ]))

    # Center the table
    wrapper = Table([[cta_table]], colWidths=[7 * inch])
    wrapper.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ]))
    story.append(wrapper)

    story.append(Spacer(1, 30))
    story.append(HRFlowable(
        width='30%', thickness=1, color=TEAL,
        spaceAfter=12, spaceBefore=0,
    ))
    story.append(Paragraph(
        'DDR Health &amp; Fitness  |  Nashville, TN  |  Whole Life Habits. Real Results.',
        styles['footer']
    ))
    story.append(Spacer(1, 6))
    story.append(Paragraph(
        'Results vary by individual. Consult your physician before beginning any exercise or nutrition program.',
        styles['footer']
    ))


def main():
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)

    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=letter,
        topMargin=0.75 * inch,
        bottomMargin=0.75 * inch,
        leftMargin=0.75 * inch,
        rightMargin=0.75 * inch,
        title='The 5 Biggest Health Mistakes Busy Professionals Make',
        author='David D. Rogers — DDR Health & Fitness',
        subject='Free health guide for busy professionals',
    )

    story = []

    # ── COVER ──
    build_cover(story)

    # ── INTRO ──
    build_intro(story)

    # ── MISTAKE 1 ──
    build_mistake(
        story,
        number=1,
        title="Skipping the Foundation: You're Training Without Assessing",
        why_it_happens=(
            "You found a workout plan online, downloaded an app, or followed what your buddy does "
            "at the gym. You jumped straight into training without ever stepping back to look at "
            "the full picture \u2014 your movement patterns, your injury history, your stress levels, "
            "your sleep quality. It feels proactive, but you're building on a foundation you've never inspected."
        ),
        why_it_matters=(
            "Without an assessment, you're guessing. And guessing leads to injury, plateaus, or "
            "programs that don't match your body's actual needs. I've seen executives spending "
            "five days a week in the gym and barely making progress \u2014 because nobody took the "
            "time to evaluate what their body actually needed first."
        ),
        the_fix=(
            "Before you change a single workout, get a whole-life assessment. This means evaluating:"
        ),
        fix_bullets=[
            "Your current fitness baseline (strength, mobility, cardiovascular capacity)",
            "Your movement patterns and any compensations or imbalances",
            "Your nutrition habits \u2014 not just what you eat, but when, why, and how",
            "Your sleep quality and stress management",
            "Your schedule \u2014 what's realistic given your actual life",
        ],
        ddr_tip=(
            "At DDR Health & Fitness, every client starts with a whole-life assessment. "
            "It's the foundation of everything I do. You can't build a plan that works if you "
            "don't know where you're starting from."
        ),
    )

    # ── MISTAKE 2 ──
    build_mistake(
        story,
        number=2,
        title="The All-or-Nothing Trap: Going Too Hard, Then Quitting",
        why_it_happens=(
            "Monday rolls around. You're motivated. You commit to working out six days a week, "
            "cutting carbs, drinking a gallon of water, and waking up at 5 AM. By Thursday, you're "
            "exhausted. By the following Monday, you're back to old habits. Rinse and repeat \u2014 "
            "every January, every Monday, every time something inspires you."
        ),
        why_it_matters=(
            "Extreme approaches create extreme rebounds. Your body responds to sudden calorie "
            "restriction by slowing metabolism. Your schedule can't sustain daily two-hour workouts. "
            "And the psychological toll of 'failing' yet another plan erodes your belief that change "
            "is even possible. The all-or-nothing mindset is the single biggest barrier I see in "
            "professionals over 40."
        ),
        the_fix=(
            "Start with the minimum effective dose. The goal isn't maximum effort \u2014 it's "
            "maximum consistency."
        ),
        fix_bullets=[
            "Commit to 3 workouts per week (not 6). Build from there only when it feels easy.",
            "Make ONE nutrition change this week, not ten. Maybe it's eating protein at breakfast.",
            "Set a bedtime alarm instead of a wake-up alarm. Sleep is where recovery happens.",
            "Track consistency, not intensity. 80% effort for 12 months beats 100% effort for 3 weeks.",
        ],
        ddr_tip=(
            "I tell every client the same thing: if your plan requires perfect willpower to work, "
            "it's a bad plan. We build systems that work on your worst day, not just your best."
        ),
    )

    # ── MISTAKE 3 ──
    build_mistake(
        story,
        number=3,
        title="Ignoring Recovery: You're Breaking Down Faster Than You Build Up",
        why_it_happens=(
            "As a professional, you're wired to grind. More hours, more output, more hustle. "
            "You bring that same mentality to fitness: more reps, more cardio, less rest. Sleep "
            "gets sacrificed for early gym sessions. Rest days feel lazy. You're running on coffee "
            "and cortisol, and your body is keeping score."
        ),
        why_it_matters=(
            "Exercise is a stress. A productive one \u2014 but still a stress. Your body gets "
            "stronger during recovery, not during the workout itself. If you're chronically "
            "under-recovered, you'll gain fat more easily, lose muscle, get injured, and feel "
            "perpetually tired. I've seen it hundreds of times: the person training hardest in "
            "the gym is often the person making the least progress."
        ),
        the_fix=(
            "Prioritize recovery as aggressively as you prioritize training."
        ),
        fix_bullets=[
            "Aim for 7\u20138 hours of sleep. Non-negotiable. This is where hormones repair tissue.",
            "Schedule at least 2 rest days per week. Active recovery (walking, light stretching) counts.",
            "Manage stress outside the gym: 5 minutes of breathing exercises, a walk after lunch, boundaries on work hours.",
            "Track your resting heart rate. If it's elevated, your body is telling you to back off.",
            "Hydrate properly \u2014 half your body weight in ounces of water, minimum.",
        ],
        ddr_tip=(
            "When I look at a client's whole life habits, sleep and stress management are the "
            "first things I evaluate \u2014 before we even talk about sets and reps. If recovery "
            "is broken, nothing else we do in the gym will stick."
        ),
    )

    # ── MISTAKE 4 ──
    build_mistake(
        story,
        number=4,
        title="Chasing Programs Instead of Building Habits",
        why_it_happens=(
            "Every few months there's a new program promising rapid results: a 30-day challenge, "
            "a 6-week shred, a detox, a bootcamp. You sign up, follow along, maybe even see results. "
            "Then it ends. And you're back to square one, looking for the next program. You've become "
            "a serial program-hopper, always starting but never sustaining."
        ),
        why_it_matters=(
            "Programs have end dates. Habits don't. When you rely on external structure (a challenge, "
            "an app timer, a group class schedule) without internalizing the underlying behaviors, "
            "you become dependent on novelty to stay motivated. The moment the program ends or gets "
            "boring, so does your progress. Real transformation comes from identity-level habit change \u2014 "
            "becoming the kind of person who moves, eats well, and recovers, regardless of what program "
            "you're following."
        ),
        the_fix=(
            "Shift from program-hopping to habit-building."
        ),
        fix_bullets=[
            "Identify 2\u20133 keystone habits that matter most for YOUR life (e.g., daily protein intake, 3x weekly strength training, 10PM bedtime).",
            "Build each habit for 2\u20134 weeks before adding another. Stack, don't sprint.",
            "Attach new habits to existing ones: 'After I pour my morning coffee, I drink 16oz of water.'",
            "Measure adherence, not outcomes. Did you do the thing? That's what matters early on.",
        ],
        ddr_tip=(
            "My specialty is the assessment of whole life habits for providing personalized "
            "nutrition and exercise guidance. I'm not selling you a 6-week plan \u2014 I'm helping "
            "you build a lifestyle that doesn't need an end date."
        ),
    )

    # ── MISTAKE 5 ──
    build_mistake(
        story,
        number=5,
        title="Going It Alone: No Accountability, No Adjustments",
        why_it_happens=(
            "You're smart. You're accomplished. You've built a career by figuring things out. "
            "So naturally, you think you should be able to figure out fitness too. You read articles, "
            "watch YouTube, maybe even buy a course. But you're making decisions in a vacuum \u2014 no one's "
            "watching your form, checking your nutrition, or noticing when you're overtraining or "
            "under-eating."
        ),
        why_it_matters=(
            "Self-coaching has a ceiling. Without external accountability, it's too easy to skip "
            "workouts, rationalize poor nutrition, or plateau without realizing why. And without "
            "someone adjusting your plan based on real data \u2014 how your body is responding, how "
            "your schedule shifted, how your stress levels changed \u2014 you'll eventually stall. "
            "The professionals who get the best results are the ones who invest in guidance, "
            "not just information."
        ),
        the_fix=(
            "Get a coach. Or at minimum, build accountability into your system."
        ),
        fix_bullets=[
            "Work with a qualified trainer who assesses your whole life \u2014 not just your workouts.",
            "If coaching isn't an option right now, find an accountability partner with similar goals.",
            "Review your progress monthly: what's working, what's not, what needs to change.",
            "Be honest about what you don't know. Expertise in your career doesn't transfer to exercise science.",
        ],
        ddr_tip=(
            "Together, we set the path toward achieving your ultimate health and wellness goals. "
            "That 'together' part isn't a marketing line \u2014 it's the whole point. Individualized "
            "advice that is sound and real requires someone who knows you, tracks your progress, "
            "and adjusts your plan as your life evolves."
        ),
    )

    # ── CTA PAGE ──
    build_cta(story)

    # ── BUILD ──
    doc.build(story, onFirstPage=add_header_footer, onLaterPages=add_header_footer)
    print(f'PDF created: {OUTPUT_PATH}')


if __name__ == '__main__':
    main()
