def biggest_island(grid)
  rows = grid.length
  columns = grid[0].length
  islands = {}

  rows.times do |i|
    columns.times do |j|
      point = grid[i][j]
      next if point == 0
      connection_in_island = false
      island = nil

      point_connections = connections(grid, i, j, rows, columns)

      islands.each do |key, points|
        point_connections.each do |connection|
          if points.include?(connection)
            connection_in_island = true
            island = key
            break
          end
        end
        break if connection_in_island
      end

      if connection_in_island
        islands[island] += [[i, j], *point_connections]
        islands[island].uniq!
      else
        random_name = ('a'..'z').to_a.shuffle[0, 8].join
        islands[random_name] = [[i, j], *point_connections]
      end
    end
  end

  islands.values.map(&:length).max
end

def connections(grid, i, j, rows_count, columns_count)
  result = []

  # left
  if j > 0
    left = grid[i][j - 1]
    result << [i, j - 1] if left != 0
  end

  # right
  if j < columns_count - 1
    right = grid[i][j + 1]
    result << [i, j + 1] if right != 0
  end

  # up
  if i > 0
    up = grid[i - 1][j]
    result << [i - 1, j] if up != 0
  end

  # down
  if i < rows_count - 1
    down = grid[i + 1][j]
    result << [i + 1, j] if down != 0
  end

  result
end

grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]

puts biggest_island(grid)