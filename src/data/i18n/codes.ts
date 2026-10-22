/**
 * 多语言 codes 页文案（th / id / ko）
 *
 * 为什么只做这三语：GSC 60 天里 `โค้ดแมพhole fishing` 排 #2.2 / CTR 33%、
 * `홀 낚시 코드` #4.0 / CTR 26%、`kode redeem hole fishing` #4.8 / CTR 23% ——
 * 都是本地语言查询、现在只有英文页在接。菲律宾虽是最大市场（6,130 曝光）但搜的是英文，不做。
 */
export type CodesLocale = 'th' | 'id' | 'ko';

/** codes 页的 hreflang 版本表（所有语言页共用，互指必须对称） */
export const CODES_LANGS: Record<string, string> = {
  en: '/codes',
  th: '/th/codes',
  id: '/id/codes',
  ko: '/ko/codes',
  'x-default': '/codes',
};

export interface CodesCopy {
  /** <html lang> */
  htmlLang: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  switchLabel: string;
  statusTitle: string;
  statusHead: string;
  statusBody: string;
  stepsTitle: string;
  steps: string[];
  fakeTitle: string;
  fakeBody: string;
  eventTitle: string;
  eventBody: string;
  eventLink: string;
  altTitle: string;
  altIntro: string;
  alt: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  footer: string;
}

export const CODES_I18N: Record<CodesLocale, CodesCopy> = {
  th: {
    htmlLang: 'th',
    title: 'โค้ด Hole Fishing (ตุลาคม 2026) — ยังไม่มีโค้ดที่ใช้ได้',
    description:
      'เกม Hole Fishing มีช่องกรอกโค้ดจริงใน Exclusive Store แต่ผู้พัฒนายังไม่เคยปล่อยโค้ดสักตัว วิธีกรอกโค้ด โค้ดปลอมที่แชร์กันอยู่ และรอบตรวจถัดไป',
    keywords: ['โค้ด hole fishing', 'โค้ด hole fishing roblox', 'โค้ดแมพ hole fishing', 'hole fishing codes', 'โค้ด roblox'],
    h1: 'โค้ด Hole Fishing',
    intro:
      'สรุปสั้น ๆ ก่อน: ตอนนี้ยังไม่มีโค้ดที่ใช้ได้จริงสักตัว แต่ตัวเกมมีช่องกรอกโค้ดแล้ว — อยู่ข้างใน Exclusive Store',
    switchLabel: 'English',
    statusTitle: 'สถานะโค้ด',
    statusHead: 'มีช่องกรอกโค้ดจริง — แต่ยังไม่มีโค้ด',
    statusBody:
      'ยืนยันจากภาพในเกมวันที่ 28 กันยายน 2026 ว่าเกมมีเมนู Codes อยู่ใน Exclusive Store (มีช่องพิมพ์ มีปุ่ม Redeem สีเขียว และข้อความ "Join our group & community for more codes!") แต่ผู้พัฒนา (กลุ่ม 67K CCU) ยังไม่เคยประกาศโค้ดใด ๆ เลย ทุกเว็บที่บอกว่ามี "โค้ด Hole Fishing ที่ใช้ได้" ตอนนี้คือการกุขึ้นมาเอง หน้านี้จะลงโค้ดจริงทันทีที่มีคนยืนยันได้',
    stepsTitle: 'วิธีกรอกโค้ด',
    steps: [
      'เปิดเกม แล้วกดปุ่ม Store ที่เมนูด้านซ้ายมือ',
      'หน้าต่าง Exclusive Store จะเด้งขึ้นมา เลื่อนลงไปจนสุดจะเจอหัวข้อ Codes',
      'พิมพ์โค้ดลงในช่องให้ตรงตัวพิมพ์เล็ก-ใหญ่ แล้วกดปุ่ม Redeem สีเขียว',
      'ถ้าโค้ดใช้ได้ ของรางวัลจะขึ้นในหน้าต่างเดียวกัน ถ้าขึ้น error แปลว่าโค้ดผิดหรือหมดอายุ',
    ],
    fakeTitle: 'โค้ดปลอมที่กำลังแชร์กันอยู่',
    fakeBody:
      'ตั้งแต่ปลายกันยายนมีเว็บหลายเจ้าเอาโค้ดชุดเดียวกันไปลงว่า "ใช้ได้" — BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH, CASTANDSELL ทั้งห้าตัวไม่มีตัวไหนจริง ผู้พัฒนาไม่เคยประกาศ และไม่มีคลิปไหนโชว์ว่ากรอกแล้วได้ของ วิดีโอ "Hole Fishing codes" บน YouTube ก็ไม่มีคลิปไหนโชว์กรอกสำเร็จเลย มีคลิปหนึ่งพิมพ์คำว่า "THANKS FOR WATCHING" ลงไปแทน',
    eventTitle: 'รอบตรวจโค้ดถัดไป: อีเวนต์ 🎃 วันที่ 25 ตุลาคม',
    eventBody:
      'อีเวนต์ถัดไปคือ "🎃 EVENT + ADMIN ABUSE" เริ่มวันอาทิตย์ที่ 25 ตุลาคม 2026 เวลา 16:00 UTC (ตรงกับ 23:00 น. ตามเวลาไทย) ไปจบวันจันทร์ที่ 26 ตุลาคม 23:00 น. ตามเวลาไทย ปกวิเคราะห์จาก 3 อีเวนต์ก่อนหน้า (4, 11 และ 18 ตุลาคม) คือไม่มีโค้ดออกมาเลยสักครั้ง ผู้พัฒนาพูดถึง "admin codes" ในแชทแต่ไม่เคยโพสต์จริง',
    eventLink: 'ดูตารางเวลาแปลงเป็นโซนเวลาไทย',
    altTitle: 'ถ้ายังไม่มีโค้ด มีอะไรฟรีบ้าง',
    altIntro: 'ของฟรีที่ยืนยันแล้วในเกม และเป็นทางเดียวที่ได้ของตอนนี้:',
    alt: [
      'หีบรางวัลฟรีใกล้จุดเกิด — กดรับได้หลังกดไลก์เกมและเข้ากลุ่ม 67K CCU',
      'Server Hole ที่เปิดทุก ๆ ประมาณ 20 นาที ให้เงิน 4 เท่า',
      'ตกปลากลางคืน — ปลายุคกลางคืนราคาสูงกว่าปลากลางวันมาก',
      'เก็บ Fish Index ให้ครบ ได้โบนัส luck ถาวร',
    ],
    faqTitle: 'คำถามที่เจอบ่อย',
    faq: [
      {
        q: 'Hole Fishing มีโค้ดไหม',
        a: 'ยังไม่มีครับ ตัวเกมมีช่องกรอกโค้ดจริงใน Exclusive Store แต่ผู้พัฒนายังไม่เคยปล่อยโค้ดสักตัว นับถึงอีเวนต์วันที่ 18 ตุลาคม 2026',
      },
      {
        q: 'โค้ดจาก aeonsme / BIGGERHOLE ใช้ได้ไหม',
        a: 'ใช้ไม่ได้ทั้งหมด BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH และ CASTANDSELL เป็นโค้ดที่เว็บรวบรวมโค้ดกุขึ้นมา ผู้พัฒนาไม่เคยประกาศ',
      },
      {
        q: 'โค้ดจะออกเมื่อไหร่',
        a: 'ยังไม่มีกำหนด ดูเหมือนผู้พัฒนายังไม่ใช้ระบบโค้ดเลย เพราะยอด like, visit, favorite และสมาชิกกลุ่มผ่านเกณฑ์ที่เกมอื่นออกโค้ดไปหมดแล้ว ก็ยังไม่ออกสักตัว',
      },
    ],
    footer: 'ข้อมูลจากหน้าเกม Roblox, กลุ่ม 67K CCU, API อีเวนต์อย่างเป็นทางการ และภาพในเกม ตรวจล่าสุด 22 ตุลาคม 2026',
  },

  id: {
    htmlLang: 'id',
    title: 'Kode Hole Fishing (Oktober 2026) — Belum Ada Kode Aktif',
    description:
      'Hole Fishing punya kotak kode asli di Exclusive Store, tapi developer belum pernah merilis satu kode pun. Cara redeem, kode palsu yang beredar, dan jadwal cek berikutnya.',
    keywords: ['kode hole fishing', 'kode hole fishing roblox', 'kode redeem hole fishing', 'hole fishing codes', 'kode roblox'],
    h1: 'Kode Hole Fishing',
    intro:
      'Ringkasnya: belum ada satu pun kode yang berfungsi. Tapi kotak kodenya sudah ada di dalam game — di menu Exclusive Store.',
    switchLabel: 'English',
    statusTitle: 'Status kode',
    statusHead: 'Kotak kode asli sudah ada — kodenya belum',
    statusBody:
      'Rekaman in-game 28 September 2026 memastikan game ini punya menu Codes di dalam Exclusive Store (ada kolom isian, tombol Redeem hijau, dan tulisan "Join our group & community for more codes!"). Yang belum ada adalah kode resmi dari developer (grup 67K CCU). Semua situs yang mengaku punya "kode Hole Fishing aktif" saat ini mengarang. Halaman ini akan menampilkan kode asli begitu ada yang terverifikasi.',
    stepsTitle: 'Cara redeem kode',
    steps: [
      'Buka game, lalu tekan tombol Store di menu kiri.',
      'Jendela Exclusive Store akan terbuka — gulir ke bawah sampai bertemu bagian Codes.',
      'Ketik kodenya persis sesuai huruf besar-kecil, lalu tekan tombol Redeem hijau.',
      'Kalau kodenya valid, hadiah langsung muncul di jendela itu. Kalau muncul error, berarti kodenya salah atau sudah kedaluwarsa.',
    ],
    fakeTitle: 'Kode palsu yang sedang beredar',
    fakeBody:
      'Sejak akhir September beberapa situs kode menyalin lima kode yang sama dan menyebutnya "aktif": BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH, CASTANDSELL. Tidak ada satu pun yang asli — developer tidak pernah mengumumkannya, dan tidak ada rekaman yang menunjukkan kode itu berhasil di-redeem. Video "Hole Fishing codes" di YouTube juga tidak pernah menunjukkan redeem yang berhasil; ada yang malah mengetik "THANKS FOR WATCHING" ke kolom kode.',
    eventTitle: 'Jadwal cek kode berikutnya: event 🎃 25 Oktober',
    eventBody:
      'Event berikutnya adalah "🎃 EVENT + ADMIN ABUSE", mulai Minggu 25 Oktober 2026 pukul 16:00 UTC (23:00 WIB) sampai Senin 26 Oktober pukul 23:00 WIB. Dari tiga event sebelumnya (4, 11, dan 18 Oktober) tidak ada kode yang keluar sama sekali. Developer sempat menyebut "admin codes" di chat, tapi tidak pernah diposting.',
    eventLink: 'Lihat tabel waktu lengkapnya',
    altTitle: 'Kalau belum ada kode, apa yang bisa didapat gratis',
    altIntro: 'Hadiah gratis yang sudah terverifikasi di dalam game:',
    alt: [
      'Peti hadiah gratis di dekat spawn — bisa diambil setelah like game dan join grup 67K CCU',
      'Server Hole yang terbuka kira-kira tiap 20 menit, memberi uang 4x',
      'Memancing malam — ikan malam harganya jauh di atas ikan siang',
      'Melengkapi Fish Index memberi bonus luck permanen',
    ],
    faqTitle: 'Pertanyaan yang sering muncul',
    faq: [
      {
        q: 'Apakah Hole Fishing punya kode?',
        a: 'Belum. Game ini sudah punya kotak kode asli di Exclusive Store, tetapi developer belum pernah merilis kode apa pun sampai event 18 Oktober 2026.',
      },
      {
        q: 'Apakah kode BIGGERHOLE atau MUTATIONHUNT berfungsi?',
        a: 'Tidak. BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH, dan CASTANDSELL adalah kode karangan situs agregator. Developer tidak pernah mengumumkannya.',
      },
      {
        q: 'Kapan kode pertama keluar?',
        a: 'Belum ada tanggal. Sepertinya developer memang belum memakai sistem kode sama sekali — jumlah like, kunjungan, favorit, dan anggota grup sudah melewati ambang yang biasanya memicu kode di game lain, tapi tetap tidak ada.',
      },
    ],
    footer: 'Sumber: halaman game Roblox, grup 67K CCU, API event resmi Roblox, dan rekaman in-game. Dicek terakhir 22 Oktober 2026.',
  },

  ko: {
    htmlLang: 'ko',
    title: '홀 낚시 코드 (2026년 10월) — 사용 가능한 코드 없음',
    description:
      '홀 낚시(Hole Fishing)에는 Exclusive Store 안에 실제 코드 입력창이 있지만, 개발자가 아직 코드를 하나도 배포하지 않았습니다. 입력 방법, 가짜 코드, 다음 확인 일정을 정리했습니다.',
    keywords: ['홀 낚시 코드', '홀 피싱 코드', 'hole fishing 코드', '로블록스 홀 낚시 코드', 'hole fishing codes'],
    h1: '홀 낚시 코드 (Hole Fishing Codes)',
    intro:
      '결론부터: 지금 사용할 수 있는 코드는 없습니다. 다만 게임 안에는 실제 코드 입력창이 이미 생겼습니다 — Exclusive Store 안에 있습니다.',
    switchLabel: 'English',
    statusTitle: '코드 현황',
    statusHead: '입력창은 진짜 — 코드는 아직 없음',
    statusBody:
      '2026년 9월 28일 게임 화면으로 확인했습니다. 게임에는 Exclusive Store 안에 Codes 메뉴가 있습니다(입력창, 초록색 Redeem 버튼, "Join our group & community for more codes!" 문구까지). 없는 것은 개발자(67K CCU 그룹)가 배포한 실제 코드입니다. 지금 "홀 낚시 코드 사용 가능"이라고 적힌 사이트는 전부 지어낸 것입니다. 이 페이지는 확인된 코드가 나오는 즉시 가장 먼저 올립니다.',
    stepsTitle: '코드 입력 방법',
    steps: [
      '게임에 접속한 뒤 왼쪽 메뉴의 Store 버튼을 누릅니다.',
      'Exclusive Store 창이 뜨면 맨 아래까지 스크롤해서 Codes 항목을 찾습니다.',
      '코드를 대소문자 그대로 입력하고 초록색 Redeem 버튼을 누릅니다.',
      '정상 코드라면 같은 창에 보상이 표시됩니다. 오류가 뜨면 코드가 틀렸거나 만료된 것입니다.',
    ],
    fakeTitle: '지금 돌고 있는 가짜 코드',
    fakeBody:
      '9월 말부터 여러 코드 사이트가 같은 다섯 개를 "사용 가능"이라고 올리고 있습니다 — BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH, CASTANDSELL. 다섯 개 모두 실제 코드가 아닙니다. 개발자가 공지한 적이 없고, 입력에 성공하는 장면을 보여준 영상도 없습니다. 유튜브 "Hole Fishing codes" 영상들도 성공 장면 없이 아무 문자열이나 입력하고, 어떤 영상은 아예 "THANKS FOR WATCHING"을 입력합니다.',
    eventTitle: '다음 코드 확인 일정: 🎃 10월 25일 이벤트',
    eventBody:
      '다음 이벤트는 "🎃 EVENT + ADMIN ABUSE"로, 2026년 10월 25일(일) 16:00 UTC — 한국 시간으로 10월 26일(월) 새벽 1시 — 에 시작해서 10월 27일 새벽 1시(한국 시간)에 끝납니다. 이전 세 번의 이벤트(10월 4일·11일·18일)에서는 코드가 한 번도 나오지 않았습니다. 개발자가 채팅에서 "admin codes"를 언급하긴 했지만 실제로 올린 적은 없습니다.',
    eventLink: '시간대별 표 보기',
    altTitle: '코드가 없을 때 무료로 얻는 방법',
    altIntro: '게임 안에서 확인된 무료 보상입니다:',
    alt: [
      '스폰 근처 무료 보상 상자 — 게임 좋아요와 67K CCU 그룹 가입 후 수령',
      '약 20분마다 열리는 Server Hole — 현금 4배',
      '밤 낚시 — 밤에만 나오는 물고기 가격이 낮 물고기보다 훨씬 높음',
      'Fish Index를 채우면 영구 럭 보너스',
    ],
    faqTitle: '자주 묻는 질문',
    faq: [
      {
        q: '홀 낚시에 코드가 있나요?',
        a: '없습니다. 게임에는 Exclusive Store 안에 실제 코드 입력창이 있지만, 2026년 10월 18일 이벤트까지 개발자는 코드를 한 번도 배포하지 않았습니다.',
      },
      {
        q: 'BIGGERHOLE, MUTATIONHUNT 코드는 되나요?',
        a: '안 됩니다. BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH, CASTANDSELL은 코드 수집 사이트가 만든 가짜입니다.',
      },
      {
        q: '첫 코드는 언제 나오나요?',
        a: '공지된 날짜가 없습니다. 좋아요·방문·즐겨찾기·그룹 인원이 다른 게임이라면 코드가 나왔을 기준을 모두 넘겼는데도 나오지 않아서, 개발자가 아직 코드 시스템을 쓰지 않는 것으로 보입니다.',
      },
    ],
    footer: '출처: 로블록스 게임 페이지, 67K CCU 그룹, 로블록스 공식 이벤트 API, 게임 화면. 최종 확인 2026년 10월 22일.',
  },
};
