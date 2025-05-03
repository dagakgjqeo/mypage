'use client'; // ✅ クライアントコンポーネントにする

import dynamic from 'next/dynamic';
import React from 'react';
import 'rc-gantt/dist/rc-gantt.css';

// rc-gantt は SSR 非対応なので dynamic import が必要
const RcGantt = dynamic(() => import('rc-gantt'), { ssr: false });

const Page = () => {
  const data = [
    {
      name: 'タスクA',
      startDate: '2025-05-01',
      endDate: '2025-05-05',
      collapsed: false,
      children: [
        {
          name: 'サブタスクA-1',
          startDate: '2025-05-01',
          endDate: '2025-05-02',
          collapsed: false,
          content: '詳細情報',
        },
      ],
    },
  ];

  const columns = [
    {
      name: 'name',
      label: 'タスク名',
      width: 200,
      maxWidth: 200,
      minWidth: 200,
    },
  ];

  return (
    <div style={{ height: 500, padding: 20 }}>
      <RcGantt
        data={data}
        columns={columns}
        onUpdate={async () => true}
      />
    </div>
  );
};

export default Page;
