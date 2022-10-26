export default function Progress({ max, value }: { max: number; value: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-primary h-2.5 rounded-full"
        style={{
          width: (value / max) * 100 + '%',
        }}
      />
    </div>
  );
}
