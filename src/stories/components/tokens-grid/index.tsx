import './styles.scss';

interface TokensGridProps {
  tokens: [{ value: string; key: string }];
  hasRemValue?: boolean;
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {tokens.map(({ key, value }) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}</td>}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
