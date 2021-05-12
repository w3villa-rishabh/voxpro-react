export default [
  {
    index: 1,
    heading: 'About you and the work',
    question:
      'Do you provide your services through a limited company, partnership or unincorporated association?',
    p1: 'These are also known as intermediarie',
    p2:
      'An unincorporated association’ is an organisation set up by a group of people for a reason other than to make a profit. For example, a voluntary group or a sports club.',
    previous: 0,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: true,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 3
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 2
      }
    ]
  },
  {
    index: 2,
    options: []
  },
  {
    index: 3,
    heading: 'About you and the work',
    question: 'Have you already started working for this client?',
    p1: '',
    p2: '',
    previous: 1,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 4
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 5
      }
    ]
  },
  {
    index: 4,
    heading: 'Worker’s duties',
    question: 'Will you be an ‘Office Holder’?',
    p1:
      'This can include being a board member, treasurer, trustee, company secretary or company director.',
    p2: 'Read more about Office Holders (opens in a new window).',
    previous: 3,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 6
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 7
      }
    ]
  },
  {
    index: 5,
    heading: 'Worker’s duties',
    question: 'Will you be an ‘Office Holder’?',
    p1:
      'This can include being a board member, treasurer, trustee, company secretary or company director.',
    p2: 'Read more about Office Holders (opens in a new window).',
    previous: 3,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 6
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 8
      }
    ]
  },
  {
    index: 6,
    message: 'your answer has been submitted',
    options: []
  },
  {
    index: 7,
    heading: 'Substitutes and helpers',
    question: 'Have you ever sent a substitute to do this work?',
    p1: 'A substitute is someone you send in your place to do your role.',
    p2: '',
    previous: 4,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes, your client accepted them',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 9
      },
      {
        name: 'Yes, but your client did not accept them',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 10
      },
      {
        name: 'Yes, but your client did not accept them',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 11
      }
    ]
  },
  {
    index: 8,
    heading: 'Substitutes and helpers',
    question: 'Does your client have the right to reject a substitute?',
    p1: 'A substitute is someone you send in your place to do your role.',
    p2:
      'This can include rejecting a substitute even if they are equally qualified, and meet your client’s interviewing, vetting and security clearance procedures',
    previous: 5,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 12
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 13
      }
    ]
  },
  {
    index: 9,
    heading: 'Substitutes and helpers',
    question: 'Did you pay your substitute?',
    p1: 'This includes payments made by you or your business.',
    p2: '',
    previous: 7,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 14
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 15
      }
    ]
  },
  {
    index: 10,
    heading: 'Substitutes and helpers',
    question:
      'Have you paid another person to do a significant amount of this work?',
    p1: '',
    p2: '',
    previous: 7,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 16
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 16
      }
    ]
  },
  {
    index: 11,
    heading: 'Substitutes and helpers',
    question: 'Does your client have the right to reject a substitute?',
    p1: 'A substitute is someone you send in your place to do your role.',
    p2:
      'This can include rejecting a substitute even if they are equally qualified, and meet your client’s interviewing, vetting and security clearance procedures.',
    previous: 7,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 17
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 18
      }
    ]
  },
  {
    index: 12,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 8,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 19
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 19
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 19
      }
    ]
  },
  {
    index: 13,
    heading: 'Substitutes and helpers',
    question: 'Would you have to pay your substitute?',
    p1: 'This would include payments made by you or your business.',
    p2: '',
    previous: 8,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 20
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 20
      }
    ]
  },
  {
    index: 14,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 9,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 21
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 21
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 21
      }
    ]
  },
  {
    index: 15,
    heading: 'Substitutes and helpers',
    question:
      'Have you paid another person to do a significant amount of this work?',
    p1: '',
    p2: '',
    previous: 9,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 22
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 22
      }
    ]
  },
  {
    index: 16,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 10,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 23
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 23
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 23
      }
    ]
  },
  {
    index: 17,
    heading: 'Substitutes and helpers',
    question:
      'Have you paid another person to do a significant amount of this work?',
    p1: '',
    p2: '',
    previous: 11,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 24
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 24
      }
    ]
  },
  {
    index: 18,
    heading: 'Substitutes and helpers',
    question: 'Would you have to pay your substitute?',
    p1: 'This would include payments made by you or your business.',
    p2: '',
    previous: 11,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 25
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 26
      }
    ]
  },
  {
    index: 19,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 12,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 27
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 27
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 27
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 27
      }
    ]
  },
  {
    index: 20,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 13,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 28
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 28
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 28
      }
    ]
  },
  {
    index: 21,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 14,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 29
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 29
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 29
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 29
      }
    ]
  },
  {
    index: 22,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 15,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 30
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 30
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 30
      }
    ]
  },
  {
    index: 23,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 16,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 31
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 31
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 31
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 31
      }
    ]
  },
  {
    index: 24,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 17,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 32
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 32
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 32
      }
    ]
  },
  {
    index: 25,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 18,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 33
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 33
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 33
      }
    ]
  },
  {
    index: 26,
    heading: 'Substitutes and helpers',
    question:
      'Have you paid another person to do a significant amount of this work?',
    p1: '',
    p2: '',
    previous: 18,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 34
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 34
      }
    ]
  },
  {
    index: 27,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 19,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 35
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 35
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 35
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 35
      }
    ]
  },
  {
    index: 28,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 20,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 36
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 36
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 36
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 36
      }
    ]
  },
  {
    index: 29,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 21,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 37
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 37
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 37
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 37
      }
    ]
  },
  {
    index: 30,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 22,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 38
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 38
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 38
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 38
      }
    ]
  },
  {
    index: 31,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 23,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 39
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 39
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 39
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 39
      }
    ]
  },
  {
    index: 32,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 24,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 40
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 40
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 40
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 40
      }
    ]
  },
  {
    index: 33,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 25,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 41
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 41
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 41
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 41
      }
    ]
  },
  {
    index: 34,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    previous: 26,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 42
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 42
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 42
      }
    ]
  },
  {
    index: 35,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 27,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 43
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 43
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 43
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 43
      }
    ]
  },
  {
    index: 36,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 28,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 44
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 44
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 44
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 44
      }
    ]
  },
  {
    index: 37,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 29,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 45
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 45
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 45
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 45
      }
    ]
  },
  {
    index: 38,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 30,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 46
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 46
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 46
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 46
      }
    ]
  },
  {
    index: 39,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 31,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 47
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 47
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 47
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 47
      }
    ]
  },
  {
    index: 40,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 32,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 48
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 48
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 48
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 48
      }
    ]
  },
  {
    index: 41,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 33,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 49
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 49
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 49
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 49
      }
    ]
  },
  {
    index: 42,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    previous: 34,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 50
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 50
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 50
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 50
      }
    ]
  },
  {
    index: 43,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 35,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 51
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 51
      }
    ]
  },
  {
    index: 44,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 36,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 52
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 52
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 52
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 52
      }
    ]
  },
  {
    index: 45,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 37,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 53
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 53
      }
    ]
  },
  {
    index: 46,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 38,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 54
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 54
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 54
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 54
      }
    ]
  },
  {
    index: 47,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 39,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 55
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 55
      }
    ]
  },
  {
    index: 48,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 40,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 56
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 56
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 56
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 56
      }
    ]
  },
  {
    index: 49,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 41,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 57
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 57
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 57
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 57
      }
    ]
  },
  {
    index: 50,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    previous: 42,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 58
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 58
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 58
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 58
      }
    ]
  },
  {
    index: 51,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    previous: 43,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 59
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 59
      }
    ]
  },
  {
    index: 52,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 44,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 60
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 60
      }
    ]
  },
  {
    index: 53,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    previous: 45,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 61
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 61
      }
    ]
  },
  {
    index: 54,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 46,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 62
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 62
      }
    ]
  },
  {
    index: 55,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    previous: 47,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 63
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 63
      }
    ]
  },
  {
    index: 56,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 48,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 64
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 64
      }
    ]
  },
  {
    index: 57,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    previous: 49,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 65
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 65
      }
    ]
  },
  {
    index: 58,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    previous: 50,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 66
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 66
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 66
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 66
      }
    ]
  },
  {
    index: 59,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 51,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 67
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 67
      }
    ]
  },
  {
    index: 60,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 52,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 68
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 68
      }
    ]
  },
  {
    index: 61,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 53,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 69
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 69
      }
    ]
  },
  {
    index: 62,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 54,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 70
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 70
      }
    ]
  },
  {
    index: 63,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 55,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 71
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 71
      }
    ]
  },
  {
    index: 64,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 56,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 72
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 72
      }
    ]
  },
  {
    index: 65,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 57,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 73
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 73
      }
    ]
  },
  {
    index: 66,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    provious: 58,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 74
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 74
      }
    ]
  },
  {
    index: 67,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any other costs before your client pays you?',
    p1:
      'This can include non-commuting travel or accommodation, or external business premises for this work only.',
    p2: '',
    provious: 59,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 75
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 75
      }
    ]
  },
  {
    index: 68,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 60,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 76
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 76
      }
    ]
  },
  {
    index: 69,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any other costs before your client pays you?',
    p1:
      'This can include non-commuting travel or accommodation, or external business premises for this work only.',
    p2: '',
    provious: 61,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 77
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 77
      }
    ]
  },
  {
    index: 70,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 62,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 78
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 78
      }
    ]
  },
  {
    index: 71,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any other costs before your client pays you?',
    p1:
      'This can include non-commuting travel or accommodation, or external business premises for this work only.',
    p2: '',
    provious: 63,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 79
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 79
      }
    ]
  },
  {
    index: 72,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 64,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 80
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 80
      }
    ]
  },
  {
    index: 73,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 65,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 81
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 81
      }
    ]
  },
  {
    index: 74,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 66,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 82
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 82
      }
    ]
  },
  {
    index: 75,
    heading: 'Worker’s financial risk',
    question: 'How will you be paid for this work?',
    p1: '',
    p2: '',
    provious: 67,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'An hourly, daily or weekly rate',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 83
      },
      {
        name: 'A fixed price for the project',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 83
      },
      {
        name: 'A fixed amount for each piece of work completed',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 83
      },
      {
        name: 'A percentage of the sales you generate',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 83
      },
      {
        name: 'A percentage of your client’s profits or savings',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 83
      }
    ]
  },
  {
    index: 76,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any other costs before your client pays you?',
    p1:
      'This can include non-commuting travel or accommodation, or external business premises for this work only.',
    p2: '',
    provious: 68,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 84
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 84
      }
    ]
  },
  {
    index: 77,
    heading: 'Worker’s financial risk',
    question: 'How will you be paid for this work?',
    p1: '',
    p2: '',
    provious: 69,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'An hourly, daily or weekly rate',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 85
      },
      {
        name: 'A fixed price for the project',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 85
      },
      {
        name: 'A fixed amount for each piece of work completed',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 85
      },
      {
        name: 'A percentage of the sales you generate',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 85
      },
      {
        name: 'A percentage of your client’s profits or savings',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 85
      }
    ]
  },
  {
    index: 78,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any other costs before your client pays you?',
    p1:
      'This can include non-commuting travel or accommodation, or external business premises for this work only.',
    p2: '',
    provious: 70,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 86
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 86
      }
    ]
  },
  {
    index: 79,
    heading: 'Worker’s financial risk',
    question: 'How will you be paid for this work?',
    p1: '',
    p2: '',
    provious: 71,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'An hourly, daily or weekly rate',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 87
      },
      {
        name: 'A fixed price for the project',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 87
      },
      {
        name: 'A fixed amount for each piece of work completed',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 87
      },
      {
        name: 'A percentage of the sales you generate',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 87
      },
      {
        name: 'A percentage of your client’s profits or savings',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 87
      }
    ]
  },
  {
    index: 80,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any other costs before your client pays you?',
    p1:
      'This can include non-commuting travel or accommodation, or external business premises for this work only.',
    p2: '',
    provious: 72,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 88
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 88
      }
    ]
  },
  {
    index: 81,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any other costs before your client pays you?',
    p1:
      'This can include non-commuting travel or accommodation, or external business premises for this work only.',
    p2: '',
    provious: 73,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 89
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 89
      }
    ]
  },
  {
    index: 82,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 74,
    candidateSelect: false,
    agencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 90
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 90
      }
    ]
  },
  {
    index: 83,
    heading: 'Worker’s financial risk',
    question:
      'If the client was not happy with your work, would you have to put it right?',
    p1: '',
    p2: '',
    provious: 75,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name:
          'Yes, unpaid and you would have extra costs that your client would not pay for',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 91
      },
      {
        name:
          'Yes, unpaid but your only cost would be losing the opportunity to do other work',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 91
      },
      {
        name:
          'Yes, you would fix it in your usual hours at your usual rate or fee',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 91
      },
      {
        name: 'No, the work is time-specific or for a single event',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 91
      },
      {
        name: 'No',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 91
      }
    ]
  },
  {
    index: 84,
    heading: 'Worker’s financial risk',
    question: 'How will you be paid for this work?',
    p1: '',
    p2: '',
    provious: 76,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'An hourly, daily or weekly rate',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 92
      },
      {
        name: 'A fixed price for the project',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 92
      },
      {
        name: 'A fixed amount for each piece of work completed',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 92
      },
      {
        name: 'A percentage of the sales you generate',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 92
      },
      {
        name: 'A percentage of your client’s profits or savings',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 92
      }
    ]
  },
  {
    index: 85,
    heading: 'Worker’s financial risk',
    question:
      'If the client was not happy with your work, would you have to put it right?',
    p1: '',
    p2: '',
    provious: 77,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name:
          'Yes, unpaid and you would have extra costs that your client would not pay for',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 93
      },
      {
        name:
          'Yes, unpaid but your only cost would be losing the opportunity to do other work',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 93
      },
      {
        name:
          'Yes, you would fix it in your usual hours at your usual rate or fee',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 93
      },
      {
        name: 'No, the work is time-specific or for a single event',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 93
      },
      {
        name: 'No',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 93
      }
    ]
  },
  {
    index: 86,
    heading: 'Worker’s financial risk',
    question: 'How will you be paid for this work?',
    p1: '',
    p2: '',
    provious: 78,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'An hourly, daily or weekly rate',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 94
      },
      {
        name: 'A fixed price for the project',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 94
      },
      {
        name: 'A fixed amount for each piece of work completed',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 94
      },
      {
        name: 'A percentage of the sales you generate',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 94
      },
      {
        name: 'A percentage of your client’s profits or savings',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 94
      }
    ]
  },
  {
    index: 87,
    heading: 'Worker’s financial risk',
    question:
      'If the client was not happy with your work, would you have to put it right?',
    p1: '',
    p2: '',
    provious: 79,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name:
          'Yes, unpaid and you would have extra costs that your client would not pay for',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 95
      },
      {
        name:
          'Yes, unpaid but your only cost would be losing the opportunity to do other work',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 95
      },
      {
        name:
          'Yes, you would fix it in your usual hours at your usual rate or fee',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 95
      },
      {
        name: 'No, the work is time-specific or for a single event',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 95
      },
      {
        name: 'No',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 95
      }
    ]
  },
  {
    index: 88,
    heading: 'Worker’s financial risk',
    question: 'How will you be paid for this work?',
    p1: '',
    p2: '',
    provious: 80,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'An hourly, daily or weekly rate',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 96
      },
      {
        name: 'A fixed price for the project',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 96
      },
      {
        name: 'A fixed amount for each piece of work completed',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 96
      },
      {
        name: 'A percentage of the sales you generate',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 96
      },
      {
        name: 'A percentage of your client’s profits or savings',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 96
      }
    ]
  },
  {
    index: 89,
    heading: 'Worker’s financial risk',
    question: 'How will you be paid for this work?',
    p1: '',
    p2: '',
    provious: 81,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'An hourly, daily or weekly rate',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 97
      },
      {
        name: 'A fixed price for the project',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 97
      },
      {
        name: 'A fixed amount for each piece of work completed',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 97
      },
      {
        name: 'A percentage of the sales you generate',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 97
      },
      {
        name: 'A percentage of your client’s profits or savings',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 97
      }
    ]
  },
  {
    index: 90,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any other costs before your client pays you?',
    p1:
      'This can include non-commuting travel or accommodation, or external business premises for this work only.',
    p2: '',
    provious: 82,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 98
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 98
      }
    ]
  },
  {
    index: 91,
    heading: 'Worker’s involvement',
    question: 'Will your client provide you with paid-for corporate benefits?',
    p1:
      'This can include external gym memberships, health insurance or retail discounts.',
    p2: '',
    provious: 83,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 99
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 99
      }
    ]
  },
  {
    index: 92,
    heading: 'Worker’s financial risk',
    question:
      'If the client was not happy with your work, would you have to put it right?',
    p1: '',
    p2: '',
    provious: 84,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name:
          'Yes, unpaid and you would have extra costs that your client would not pay for',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 100
      },
      {
        name:
          'Yes, unpaid but your only cost would be losing the opportunity to do other work',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 100
      },
      {
        name:
          'Yes, you would fix it in your usual hours at your usual rate or fee',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 100
      },
      {
        name: 'No, the work is time-specific or for a single event',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 100
      },
      {
        name: 'No',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 100
      }
    ]
  },
  {
    index: 93,
    heading: 'Worker’s involvement',
    question: 'Will your client provide you with paid-for corporate benefits?',
    p1:
      'This can include external gym memberships, health insurance or retail discounts.',
    p2: '',
    provious: 85,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 101
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 101
      }
    ]
  },
  {
    index: 94,
    heading: 'Worker’s financial risk',
    question:
      'If the client was not happy with your work, would you have to put it right?',
    p1: '',
    p2: '',
    provious: 86,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name:
          'Yes, unpaid and you would have extra costs that your client would not pay for',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 102
      },
      {
        name:
          'Yes, unpaid but your only cost would be losing the opportunity to do other work',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 102
      },
      {
        name:
          'Yes, you would fix it in your usual hours at your usual rate or fee',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 102
      },
      {
        name: 'No, the work is time-specific or for a single event',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 91
      },
      {
        name: 'No',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 102
      }
    ]
  },
  {
    index: 95,
    heading: 'Worker’s involvement',
    question: 'Will your client provide you with paid-for corporate benefits?',
    p1:
      'This can include external gym memberships, health insurance or retail discounts.',
    p2: '',
    provious: 87,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 103
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 103
      }
    ]
  },
  {
    index: 96,
    heading: 'Worker’s financial risk',
    question:
      'If the client was not happy with your work, would you have to put it right?',
    p1: '',
    p2: '',
    provious: 88,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name:
          'Yes, unpaid and you would have extra costs that your client would not pay for',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 104
      },
      {
        name:
          'Yes, unpaid but your only cost would be losing the opportunity to do other work',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 104
      },
      {
        name:
          'Yes, you would fix it in your usual hours at your usual rate or fee',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 104
      },
      {
        name: 'No, the work is time-specific or for a single event',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 104
      },
      {
        name: 'No',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 104
      }
    ]
  },
  {
    index: 97,
    heading: 'Worker’s financial risk',
    question:
      'If the client was not happy with your work, would you have to put it right?',
    p1: '',
    p2: '',
    provious: 89,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name:
          'Yes, unpaid and you would have extra costs that your client would not pay for',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 105
      },
      {
        name:
          'Yes, unpaid but your only cost would be losing the opportunity to do other work',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 105
      },
      {
        name:
          'Yes, you would fix it in your usual hours at your usual rate or fee',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 105
      },
      {
        name: 'No, the work is time-specific or for a single event',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 105
      },
      {
        name: 'No',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 105
      }
    ]
  },
  {
    index: 98,
    heading: 'Worker’s financial risk',
    question: 'How will you be paid for this work?',
    p1: '',
    p2: '',
    provious: 90,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'An hourly, daily or weekly rate',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 106
      },
      {
        name: 'A fixed price for the project',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 106
      },
      {
        name: 'A fixed amount for each piece of work completed',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 106
      },
      {
        name: 'A percentage of the sales you generate',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 106
      },
      {
        name: 'A percentage of your client’s profits or savings',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 106
      }
    ]
  },
  {
    index: 99,
    heading: 'Worker’s involvement',
    question: 'Will you have any management responsibilities for your client?',
    p1:
      'This can include deciding how much to pay someone, hiring or dismissing workers, and delivering appraisals.',
    p2: '',
    provious: 91,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 107
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 107
      }
    ]
  },
  {
    index: 100,
    heading: 'Worker’s involvement',
    question: 'Will your client provide you with paid-for corporate benefits?',
    p1:
      'This can include external gym memberships, health insurance or retail discounts.',
    p2: '',
    provious: 92,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 108
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 108
      }
    ]
  },
  {
    index: 101,
    heading: 'Worker’s involvement',
    question: 'Will you have any management responsibilities for your client?',
    p1:
      'This can include deciding how much to pay someone, hiring or dismissing workers, and delivering appraisals.',
    p2: '',
    provious: 93,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 109
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 109
      }
    ]
  },
  {
    index: 102,
    heading: 'Worker’s involvement',
    question: 'Will your client provide you with paid-for corporate benefits?',
    p1:
      'This can include external gym memberships, health insurance or retail discounts.',
    p2: '',
    provious: 84,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 110
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 110
      }
    ]
  },
  {
    index: 103,
    heading: 'Worker’s involvement',
    question: 'Will you have any management responsibilities for your client?',
    p1:
      'This can include deciding how much to pay someone, hiring or dismissing workers, and delivering appraisals.',
    p2: '',
    provious: 95,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 111
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 111
      }
    ]
  },
  {
    index: 104,
    heading: 'Worker’s involvement',
    question: 'Will your client provide you with paid-for corporate benefits?',
    p1:
      'This can include external gym memberships, health insurance or retail discounts.',
    p2: '',
    provious: 96,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 112
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 112
      }
    ]
  },
  {
    index: 105,
    heading: 'Worker’s involvement',
    question: 'Will your client provide you with paid-for corporate benefits?',
    p1:
      'This can include external gym memberships, health insurance or retail discounts.',
    p2: '',
    provious: 97,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 113
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 113
      }
    ]
  },
  {
    index: 106,
    heading: 'Worker’s financial risk',
    question:
      'If the client was not happy with your work, would you have to put it right?',
    p1: '',
    p2: '',
    provious: 98,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name:
          'Yes, unpaid and you would have extra costs that your client would not pay for',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 114
      },
      {
        name:
          'Yes, unpaid but your only cost would be losing the opportunity to do other work',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 114
      },
      {
        name:
          'Yes, you would fix it in your usual hours at your usual rate or fee',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 114
      },
      {
        name: 'No, the work is time-specific or for a single event',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 114
      },
      {
        name: 'No',
        value: 'e',
        aria_label: 'E',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 114
      }
    ]
  },
  {
    index: 107,
    heading: 'Worker’s involvement',
    question:
      'How would you introduce yourself to your client’s consumers or suppliers?',
    p1: '',
    p2: '',
    provious: 99,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'You work for your clien',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 115
      },
      {
        name: 'You are an independent worker acting on your client’s behalf',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 115
      },
      {
        name: 'You work for your own business',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 115
      },
      {
        name: 'This would not happen',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 115
      }
    ]
  },
  {
    index: 108,
    heading: 'Worker’s involvement',
    question: 'Will you have any management responsibilities for your client?',
    p1:
      'This can include deciding how much to pay someone, hiring or dismissing workers, and delivering appraisals.',
    p2: '',
    provious: 100,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 116
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 116
      }
    ]
  },
  {
    index: 109,
    heading: 'Worker’s involvement',
    question:
      'How would you introduce yourself to your client’s consumers or suppliers?',
    p1: '',
    p2: '',
    provious: 101,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'You work for your clien',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 117
      },
      {
        name: 'You are an independent worker acting on your client’s behalf',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 117
      },
      {
        name: 'You work for your own business',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 117
      },
      {
        name: 'This would not happen',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 117
      }
    ]
  },
  {
    index: 110,
    heading: 'Worker’s involvement',
    question: 'Will you have any management responsibilities for your client?',
    p1:
      'This can include deciding how much to pay someone, hiring or dismissing workers, and delivering appraisals.',
    p2: '',
    provious: 102,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 118
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 118
      }
    ]
  },
  {
    index: 111,
    heading: 'Worker’s involvement',
    question:
      'How would you introduce yourself to your client’s consumers or suppliers?',
    p1: '',
    p2: '',
    provious: 103,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'You work for your clien',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 119
      },
      {
        name: 'You are an independent worker acting on your client’s behalf',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 119
      },
      {
        name: 'You work for your own business',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 119
      },
      {
        name: 'This would not happen',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 119
      }
    ]
  },
  {
    index: 112,
    heading: 'Worker’s involvement',
    question: 'Will you have any management responsibilities for your client?',
    p1:
      'This can include deciding how much to pay someone, hiring or dismissing workers, and delivering appraisals.',
    p2: '',
    provious: 104,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 120
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 120
      }
    ]
  },
  {
    index: 113,
    heading: 'Worker’s involvement',
    question: 'Will you have any management responsibilities for your client?',
    p1:
      'This can include deciding how much to pay someone, hiring or dismissing workers, and delivering appraisals.',
    p2: '',
    provious: 105,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 121
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 121
      }
    ]
  },
  {
    index: 114,
    heading: 'Worker’s involvement',
    question: 'Will your client provide you with paid-for corporate benefits?',
    p1:
      'This can include external gym memberships, health insurance or retail discounts.',
    p2: '',
    provious: 106,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 122
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 122
      }
    ]
  },
  //// dhyaaaaaaaaaaaaaan dena hai is question me
  {
    index: 115,
    heading: 'Worker’s contracts',
    question:
      'Does this contract stop you from doing similar work for other clients?',
    p1: 'This includes working for your client’s competitors',
    p2: '',
    provious: 107,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 123
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 124
      }
    ]
  },
  {
    index: 116,
    heading: 'Worker’s involvement',
    question:
      'How would you introduce yourself to your client’s consumers or suppliers?',
    p1: '',
    p2: '',
    provious: 108,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'You work for your clien',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 125
      },
      {
        name: 'You are an independent worker acting on your client’s behalf',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 125
      },
      {
        name: 'You work for your own business',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 125
      },
      {
        name: 'This would not happen',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 125
      }
    ]
  },
  //// dhyaaaaaaaaaaaaaan dena hai is question me
  {
    index: 117,
    heading: 'Worker’s contracts',
    question:
      'Does this contract stop you from doing similar work for other clients?',
    p1: 'This includes working for your client’s competitors',
    p2: '',
    provious: 109,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 126
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 127
      }
    ]
  },
  {
    index: 118,
    heading: 'Worker’s involvement',
    question:
      'How would you introduce yourself to your client’s consumers or suppliers?',
    p1: '',
    p2: '',
    provious: 110,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'You work for your clien',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 128
      },
      {
        name: 'You are an independent worker acting on your client’s behalf',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 128
      },
      {
        name: 'You work for your own business',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 128
      },
      {
        name: 'This would not happen',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 128
      }
    ]
  },
  //// dhyaaaaaaaaaaaaaan dena hai is question me
  {
    index: 119,
    heading: 'Worker’s contracts',
    question:
      'Does this contract stop you from doing similar work for other clients?',
    p1: 'This includes working for your client’s competitors',
    p2: '',
    provious: 111,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 129
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 130
      }
    ]
  },
  {
    index: 120,
    heading: 'Worker’s involvement',
    question:
      'How would you introduce yourself to your client’s consumers or suppliers?',
    p1: '',
    p2: '',
    provious: 112,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'You work for your clien',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 131
      },
      {
        name: 'You are an independent worker acting on your client’s behalf',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 131
      },
      {
        name: 'You work for your own business',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 131
      },
      {
        name: 'This would not happen',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 131
      }
    ]
  },
  {
    index: 121,
    heading: 'Worker’s involvement',
    question:
      'How would you introduce yourself to your client’s consumers or suppliers?',
    p1: '',
    p2: '',
    provious: 113,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'You work for your clien',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 132
      },
      {
        name: 'You are an independent worker acting on your client’s behalf',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 132
      },
      {
        name: 'You work for your own business',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 132
      },
      {
        name: 'This would not happen',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 132
      }
    ]
  },
  {
    index: 122,
    heading: 'Worker’s involvement',
    question: 'Will you have any management responsibilities for your client?',
    p1:
      'This can include deciding how much to pay someone, hiring or dismissing workers, and delivering appraisals.',
    p2: '',
    provious: 114,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 133
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 133
      }
    ]
  },
  {
    index: 123,
    heading: 'Worker’s contracts',
    question: 'Are there any ownership rights relating to this contract?',
    p1:
      'These types of rights are usually found in media, arts and creative industry contracts. This includes all intellectual property rights, copyright, trademarks, patents, and image rights.',
    p2: '',
    provious: 115,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 134
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 135
      }
    ]
  },
  {
    index: 124,
    heading: 'Worker’s contracts',
    question: 'Are you required to ask permission to work for other clients?',
    p1: '',
    p2: '',
    provious: 115,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 136
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 136
      }
    ]
  },
  //// dhyaaaaaaaaaaaaaan dena hai is question me
  {
    index: 125,
    heading: 'Worker’s contracts',
    question:
      'Does this contract stop you from doing similar work for other clients?',
    p1: 'This includes working for your client’s competitors',
    p2: '',
    provious: 116,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 137
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 138
      }
    ]
  },
  {
    index: 126,
    heading: 'Worker’s contracts',
    question: 'Are there any ownership rights relating to this contract?',
    p1:
      'These types of rights are usually found in media, arts and creative industry contracts. This includes all intellectual property rights, copyright, trademarks, patents, and image rights.',
    p2: '',
    provious: 117,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 139
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 140
      }
    ]
  },
  {
    index: 127,
    heading: 'Worker’s contracts',
    question: 'Are you required to ask permission to work for other clients?',
    p1: '',
    p2: '',
    provious: 117,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 141
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 141
      }
    ]
  },
  //// dhyaaaaaaaaaaaaaan dena hai is question me
  {
    index: 128,
    heading: 'Worker’s contracts',
    question:
      'Does this contract stop you from doing similar work for other clients?',
    p1: 'This includes working for your client’s competitors',
    p2: '',
    provious: 118,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 142
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 143
      }
    ]
  },
  {
    index: 129,
    heading: 'Worker’s contracts',
    question: 'Are there any ownership rights relating to this contract?',
    p1:
      'These types of rights are usually found in media, arts and creative industry contracts. This includes all intellectual property rights, copyright, trademarks, patents, and image rights.',
    p2: '',
    provious: 119,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 144
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 145
      }
    ]
  },
  {
    index: 130,
    heading: 'Worker’s contracts',
    question: 'Are you required to ask permission to work for other clients?',
    p1: '',
    p2: '',
    provious: 119,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 146
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 146
      }
    ]
  },
  //// dhyaaaaaaaaaaaaaan dena hai is question me
  {
    index: 131,
    heading: 'Worker’s contracts',
    question:
      'Does this contract stop you from doing similar work for other clients?',
    p1: 'This includes working for your client’s competitors',
    p2: '',
    provious: 120,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 147
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 148
      }
    ]
  },
  //// dhyaaaaaaaaaaaaaan dena hai is question me
  {
    index: 132,
    heading: 'Worker’s contracts',
    question:
      'Does this contract stop you from doing similar work for other clients?',
    p1: 'This includes working for your client’s competitors',
    p2: '',
    provious: 121,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 149
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 150
      }
    ]
  },
  {
    index: 133,
    heading: 'Worker’s involvement',
    question:
      'How would you introduce yourself to your client’s consumers or suppliers?',
    p1: '',
    p2: '',
    provious: 122,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'You work for your clien',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 151
      },
      {
        name: 'You are an independent worker acting on your client’s behalf',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 151
      },
      {
        name: 'You work for your own business',
        value: 'c',
        aria_label: 'C',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 151
      },
      {
        name: 'This would not happen',
        value: 'd',
        aria_label: 'D',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 151
      }
    ]
  },
  {
    index: 134,
    heading: 'Worker’s contracts',
    question:
      'Does the contract state the rights to this work belong to your client?',
    p1:
      'This does not include the option to buy the rights for a separate fee.',
    p2: '',
    provious: 123,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 152
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 153
      }
    ]
  },
  {
    index: 135,
    heading: 'Worker’s contracts',
    question: 'Have you had a previous contract with this client?',
    p1: '',
    p2: '',
    provious: 123,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 154
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 155
      }
    ]
  },
  {
    index: 136,
    heading: 'Worker’s contracts',
    question: 'Are there any ownership rights relating to this contract?',
    p1:
      'These types of rights are usually found in media, arts and creative industry contracts. This includes all intellectual property rights, copyright, trademarks, patents, and image rights.',
    p2: '',
    provious: 124,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 156
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 157
      }
    ]
  },
  {
    index: 137,
    heading: 'Worker’s contracts',
    question: 'Are there any ownership rights relating to this contract?',
    p1:
      'These types of rights are usually found in media, arts and creative industry contracts. This includes all intellectual property rights, copyright, trademarks, patents, and image rights.',
    p2: '',
    provious: 125,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 158
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 159
      }
    ]
  },
  {
    index: 138,
    heading: 'Worker’s contracts',
    question: 'Are you required to ask permission to work for other clients?',
    p1: '',
    p2: '',
    provious: 125,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 160
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 160
      }
    ]
  },
  {
    index: 139,
    heading: 'Worker’s contracts',
    question:
      'Does the contract state the rights to this work belong to your client?',
    p1:
      'This does not include the option to buy the rights for a separate fee.',
    p2: '',
    provious: 126,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 161
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 162
      }
    ]
  },
  {
    index: 140,
    heading: 'Worker’s contracts',
    question: 'Have you had a previous contract with this client?',
    p1: '',
    p2: '',
    provious: 126,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 163
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 164
      }
    ]
  },
  {
    index: 141,
    heading: 'Worker’s contracts',
    question: 'Are there any ownership rights relating to this contract?',
    p1:
      'These types of rights are usually found in media, arts and creative industry contracts. This includes all intellectual property rights, copyright, trademarks, patents, and image rights.',
    p2: '',
    provious: 127,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 165
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 166
      }
    ]
  },
  {
    index: 142,
    heading: 'Worker’s contracts',
    question: 'Are there any ownership rights relating to this contract?',
    p1:
      'These types of rights are usually found in media, arts and creative industry contracts. This includes all intellectual property rights, copyright, trademarks, patents, and image rights.',
    p2: '',
    provious: 128,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 167
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 168
      }
    ]
  },
  {
    index: 143,
    heading: 'Worker’s contracts',
    question: 'Are you required to ask permission to work for other clients?',
    p1: '',
    p2: '',
    provious: 128,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 169
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 169
      }
    ]
  },
  {
    index: 144,
    heading: 'Worker’s contracts',
    question:
      'Does the contract state the rights to this work belong to your client?',
    p1:
      'This does not include the option to buy the rights for a separate fee.',
    p2: '',
    provious: 129,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 170
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 171
      }
    ]
  },
  {
    index: 145,
    heading: 'Worker’s contracts',
    question: 'Have you had a previous contract with this client?',
    p1: '',
    p2: '',
    provious: 129,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 172
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 173
      }
    ]
  },
  {
    index: 146,
    heading: 'Worker’s contracts',
    question: 'Are there any ownership rights relating to this contract?',
    p1:
      'These types of rights are usually found in media, arts and creative industry contracts. This includes all intellectual property rights, copyright, trademarks, patents, and image rights.',
    p2: '',
    provious: 130,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 174
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 175
      }
    ]
  },
  {
    index: 147,
    heading: 'Worker’s contracts',
    question: 'Are there any ownership rights relating to this contract?',
    p1:
      'These types of rights are usually found in media, arts and creative industry contracts. This includes all intellectual property rights, copyright, trademarks, patents, and image rights.',
    p2: '',
    provious: 131,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 176
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 177
      }
    ]
  },
  {
    index: 148,
    heading: 'Worker’s contracts',
    question: 'Are you required to ask permission to work for other clients?',
    p1: '',
    p2: '',
    provious: 131,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 178
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 178
      }
    ]
  },
  {
    index: 149,
    heading: 'Worker’s contracts',
    question: 'Are there any ownership rights relating to this contract?',
    p1:
      'These types of rights are usually found in media, arts and creative industry contracts. This includes all intellectual property rights, copyright, trademarks, patents, and image rights.',
    p2: '',
    provious: 132,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 179
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 180
      }
    ]
  },
  {
    index: 150,
    heading: 'Worker’s contracts',
    question: 'Are you required to ask permission to work for other clients?',
    p1: '',
    p2: '',
    provious: 132,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 181
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 181
      }
    ]
  },
  //// dhyaaaaaaaaaaaaaan dena hai is question me
  {
    index: 151,
    heading: 'Worker’s contracts',
    question:
      'Does this contract stop you from doing similar work for other clients?',
    p1: 'This includes working for your client’s competitors',
    p2: '',
    provious: 133,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 182
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 183
      }
    ]
  },
  {
    index: 152,
    heading: 'Worker’s contracts',
    question: 'Have you had a previous contract with this client?',
    p1: '',
    p2: '',
    provious: 134,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 184
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 185
      }
    ]
  },
  {
    index: 153,
    heading: 'Worker’s contracts',
    question:
      'Does the contract give your client the option to buy the rights for a separate fee?',
    p1:
      'If an option like this does not exist, you would keep all the rights relating to this work.',
    p2: '',
    provious: 134,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 186
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 186
      }
    ]
  },
  {
    index: 154,
    heading: 'Worker’s contracts',
    question:
      'Will this contract start immediately after the previous one ended?',
    p1: 'This does not include any holiday period between the two contracts.',
    p2: '',
    provious: 135,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 187
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 188
      }
    ]
  },
  {
    index: 155,
    heading: 'Worker’s contracts',
    question:
      'Is the current contract the first in a series of contracts agreed with this client?',
    p1: '',
    p2: '',
    provious: 135,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 189
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 190
      }
    ]
  },
  {
    index: 156,
    heading: 'Worker’s contracts',
    question:
      'Does the contract state the rights to this work belong to your client?',
    p1:
      'This does not include the option to buy the rights for a separate fee.',
    p2: '',
    provious: 136,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 191
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 192
      }
    ]
  },
  {
    index: 157,
    heading: 'Worker’s contracts',
    question: 'Have you had a previous contract with this client?',
    p1: '',
    p2: '',
    provious: 136,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 193
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 194
      }
    ]
  },
  {
    index: 158,
    heading: 'Worker’s contracts',
    question:
      'Does the contract state the rights to this work belong to your client?',
    p1:
      'This does not include the option to buy the rights for a separate fee.',
    p2: '',
    provious: 137,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 195
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 196
      }
    ]
  },
  {
    index: 159,
    heading: 'Worker’s contracts',
    question: 'Have you had a previous contract with this client?',
    p1: '',
    p2: '',
    provious: 137,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 197
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 198
      }
    ]
  },
  {
    index: 160,
    heading: 'Worker’s contracts',
    question: 'Are there any ownership rights relating to this contract?',
    p1:
      'These types of rights are usually found in media, arts and creative industry contracts. This includes all intellectual property rights, copyright, trademarks, patents, and image rights.',
    p2: '',
    provious: 138,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 199
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 200
      }
    ]
  },
  {
    index: 161,
    heading: 'Worker’s contracts',
    question: 'Have you had a previous contract with this client?',
    p1: '',
    p2: '',
    provious: 139,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 201
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 202
      }
    ]
  },
  {
    index: 162,
    heading: 'Worker’s contracts',
    question:
      'Does the contract give your client the option to buy the rights for a separate fee?',
    p1:
      'If an option like this does not exist, you would keep all the rights relating to this work.',
    p2: '',
    provious: 139,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 203
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 203
      }
    ]
  },
  {
    index: 163,
    heading: 'Worker’s contracts',
    question:
      'Will this contract start immediately after the previous one ended?',
    p1: 'This does not include any holiday period between the two contracts.',
    p2: '',
    provious: 140,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 204
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 205
      }
    ]
  },
  {
    index: 164,
    heading: 'Worker’s contracts',
    question:
      'Is the current contract the first in a series of contracts agreed with this client?',
    p1: '',
    p2: '',
    provious: 140,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 206
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 207
      }
    ]
  },
  {
    index: 165,
    heading: 'Worker’s contracts',
    question:
      'Does the contract state the rights to this work belong to your client?',
    p1:
      'This does not include the option to buy the rights for a separate fee.',
    p2: '',
    provious: 141,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 208
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 209
      }
    ]
  },
  {
    index: 166,
    heading: 'Worker’s contracts',
    question: 'Have you had a previous contract with this client?',
    p1: '',
    p2: '',
    provious: 141,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 210
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 211
      }
    ]
  },
  {
    index: 167,
    heading: 'Worker’s contracts',
    question:
      'Does the contract state the rights to this work belong to your client?',
    p1:
      'This does not include the option to buy the rights for a separate fee.',
    p2: '',
    provious: 142,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 212
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 213
      }
    ]
  },
  {
    index: 168,
    heading: 'Worker’s contracts',
    question: 'Have you had a previous contract with this client?',
    p1: '',
    p2: '',
    provious: 142,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 214
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 215
      }
    ]
  },
  {
    index: 169,
    heading: 'Worker’s contracts',
    question: 'Are there any ownership rights relating to this contract?',
    p1:
      'These types of rights are usually found in media, arts and creative industry contracts. This includes all intellectual property rights, copyright, trademarks, patents, and image rights.',
    p2: '',
    provious: 143,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 216
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 217
      }
    ]
  },
  {
    index: 170,
    heading: 'Worker’s contracts',
    question: 'Have you had a previous contract with this client?',
    p1: '',
    p2: '',
    provious: 144,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 218
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 219
      }
    ]
  },
  {
    index: 171,
    heading: 'Worker’s contracts',
    question:
      'Does the contract give your client the option to buy the rights for a separate fee?',
    p1:
      'If an option like this does not exist, you would keep all the rights relating to this work.',
    p2: '',
    provious: 144,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 220
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 220
      }
    ]
  },
  {
    index: 172,
    heading: 'Worker’s contracts',
    question:
      'Will this contract start immediately after the previous one ended?',
    p1: 'This does not include any holiday period between the two contracts.',
    p2: '',
    provious: 145,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 221
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 222
      }
    ]
  },
  {
    index: 173,
    heading: 'Worker’s contracts',
    question:
      'Is the current contract the first in a series of contracts agreed with this client?',
    p1: '',
    p2: '',
    provious: 145,
    candidateSelect: false,
    angencySelect: false,
    companySelect: false,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 223
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        candidateSelect: false,
        agencySelect: false,
        companySelect: false,
        next: 224
      }
    ]
  }

  // {
  //   index: 186,
  //   heading: 'Worker’s contracts',
  //   question: 'Have you had a previous contract with this client?',
  //   p1: '',
  //   p2: '',
  //   provious: 153,
  //   candidateSelect: false,
  //   angencySelect: false,
  //   companySelect: false,
  //   status: false,
  //   options: [
  //     {
  //       name: 'Yes',
  //       value: 'a',
  //       aria_label: 'A',
  //       candidateSelect: false,
  //       agencySelect: false,
  //       companySelect: false,
  //       next: 184
  //     },
  //     {
  //       name: 'No',
  //       value: 'b',
  //       aria_label: 'B',
  //       candidateSelect: false,
  //       agencySelect: false,
  //       companySelect: false,
  //       next: 185
  //     }
  //   ]
  // },
  // {
  //   index: 199,
  //   heading: 'Worker’s contracts',
  //   question:
  //     'Does the contract state the rights to this work belong to your client?',
  //   p1:
  //     'This does not include the option to buy the rights for a separate fee.',
  //   p2: '',
  //   provious: 160,
  //   candidateSelect: false,
  //   angencySelect: false,
  //   companySelect: false,
  //   status: false,
  //   options: [
  //     {
  //       name: 'Yes',
  //       value: 'a',
  //       aria_label: 'A',
  //       candidateSelect: false,
  //       agencySelect: false,
  //       companySelect: false,
  //       next: 195
  //     },
  //     {
  //       name: 'No',
  //       value: 'b',
  //       aria_label: 'B',
  //       candidateSelect: false,
  //       agencySelect: false,
  //       companySelect: false,
  //       next: 196
  //     }
  //   ]
  // },
  // {
  //   index: 160,
  //   heading: 'Worker’s contracts',
  //   question: 'Have you had a previous contract with this client?',
  //   p1: '',
  //   p2: '',
  //   provious: 200,
  //   candidateSelect: false,
  //   angencySelect: false,
  //   companySelect: false,
  //   status: false,
  //   options: [
  //     {
  //       name: 'Yes',
  //       value: 'a',
  //       aria_label: 'A',
  //       candidateSelect: false,
  //       agencySelect: false,
  //       companySelect: false,
  //       next: 197
  //     },
  //     {
  //       name: 'No',
  //       value: 'b',
  //       aria_label: 'B',
  //       candidateSelect: false,
  //       agencySelect: false,
  //       companySelect: false,
  //       next: 198
  //     }
  //   ]
  // }
];
