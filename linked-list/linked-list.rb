class Node

  attr_accessor :value, :next_node

  def initialize(value, next_node = nil)
    @value = value
    @next_node = next_node
  end

end

class LinkedList

  attr_accessor :head, :tail, :length

  def initialize(value)
    @head = Node.new(value)
    @tail = @head
    @length = 1
  end

  def append(value)
    new_node = Node.new(value)
    @tail.next_node = new_node
    @tail = new_node
    @length += 1
    return self
  end

  def prepend(value)
    new_node = Node.new(value, @head)
    @head = new_node
    @length += 1
    return self
  end

  def traverse_to_index(index)
    current_node = @head
    counter = 0
    while counter < index
      current_node = current_node.next_node
      counter += 1
    end

    return current_node
  end

  def print_list
    arr = []
    current_node = @head

    while current_node != nil
      arr << current_node.value
    current_node = current_node.next_node
    end

    return arr
  end

  def insert(index, value)
    if index === 0
      return prepend(value)
    elsif index >= @length
      return append(value)
    end

    leader_node = self.traverse_to_index(index - 1)
    break_off_node = leader_node.next_node

    leader_node.next_node = Node.new(value, break_off_node)
    @length += 1

    return self

  end

  def remove(index)
    if index === 0
      @head = @head.next_node # Removing the head
    else
      # the node before the node to be remove
      leader_node = traverse_to_index(index - 1)

      # if the node at the index to be remove is the tail
      # set the next node of the prev item to null
      leader_node.next_node = index == @length - 1 ? nil : leader_node.next_node.next_node
      @tail = leader_node if index == @length - 1
    end
      @length -= 1
      return self
  end

  def reverse
    first = @head
    second = first.next_node
    @tail = @head
    while second
      temp = second.next_node
      second.next_node = first
      first = second
      second = temp
    end
    @head = first
    @tail.next_node = nil
    end

end

my_linked_list = LinkedList.new(2)
my_linked_list.append(4)
my_linked_list.append(8)
my_linked_list.prepend(0)
my_linked_list.insert(3, 6)
my_linked_list.reverse

puts my_linked_list.print_list

